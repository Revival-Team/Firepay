import { Component, OnInit } from '@angular/core';
import {Api} from "../../api.module";
import {User} from "../../user/user.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [Api]
})

export class SignupComponent implements OnInit {
  error: string;

  country: string;
  phone: string;
  name: string;
  password: string;
  repeat_password: string;

  constructor (private api: Api, private user: User) {
    this.user.setGuestToken();

    if (localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== '' && localStorage.getItem('auth_token') !== null) {
      document.location.href = '/home';
      console.log('Already authorized');
    }
  }

  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e) {
      return new bootstrap.Tooltip(e)
    });
  }

  /**
   * При регистрации, первым этапе выполняется запрос на отправку пользователю СМС сообщения для проверки его номера
   * телефона, вторым проверка кода и третьим этапом непосредственно регистрация.
   */

  public register(): void {
    sessionStorage.getItem('user');

    if (this.checkInputs()) {
      var request = this.api.request('POST', 'users/confirm', {'token': localStorage.getItem('guest_token'), 'phone': this.phone});

      setTimeout(() => {
        this.proceedRegister();
      }, 300);

      // Очистим ошибки
      this.error = '';
    } else {
      // Вернем ошибку
      this.error = 'Пожалуйста, заполните поля.'
    }
  }

  private checkInputs(): boolean {
    return !(
        this.name == '' || this.name == undefined ||
        this.password == '' || this.password == undefined ||
        this.country == '' || this.country == undefined ||
        this.phone == '' || this.phone == undefined ||
        this.repeat_password == '' || this.repeat_password == undefined
      );
  }

  private proceedRegister() {
    console.log(this.api.getResponse());

    // Перед переадресацией сохраним все поля в сессию
    sessionStorage.setItem('name', this.name);
    sessionStorage.setItem('country', this.country);
    sessionStorage.setItem('phone', this.phone);
    sessionStorage.setItem('password', this.password);

    // Теперь переадресуем на проверку кода
    window.location.href = '/verify';
  }
}
