import { Component, OnInit } from '@angular/core';
import {Api} from "../../api.module";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})

export class VerifyComponent implements OnInit {
  code: string;
  error: string;

  constructor(private api: Api) {
    if (localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== '' && localStorage.getItem('auth_token') !== null) {
      document.location.href = '/home';
      console.log('Already authorized');
    }

    console.log('Status: ' + localStorage.getItem('auth_token'));
  }

  ngOnInit(): void {

  }

  public sendCode(): void {
    if (this.validate()) {
      this.api.request('POST', 'users/confirm',
        {'token': localStorage.getItem('guest_token'), 'phone': sessionStorage.getItem('phone'), 'code': this.code});

      console.log({'token': localStorage.getItem('guest_token'), 'phone': sessionStorage.getItem('phone'), 'code': this.code});

      setTimeout(() => {
        let response = JSON.parse(this.api.getResponse());
        console.log(response);

        if (response.status === 'error') {
          /**
           * Если код неверный
           */
          this.error = 'Введён неверный код.';
        } else if (response.status === 'success') {
          /**
           * Если код верный
           */
          this.error = '';
          console.log(sessionStorage.getItem('password'));

          /**
           * Регистрируем пользователя
           */
          this.proceedRegister(response.data.confirm_uuid);
        }
      }, 300);
    } else {
      this.error = 'Пожалуйста, заполните поля!';
    }
  }

  proceedRegister(uuid: string): void {
    this.api.request('POST', 'users/registration',
      {'token': localStorage.getItem('guest_token'), 'phone': sessionStorage.getItem('phone'), 'name1': sessionStorage.getItem('name'),
        'password': sessionStorage.getItem('password'), 'iscompany': false, 'confirm_uuid': uuid});

    setTimeout(() => {
      let response = JSON.parse(this.api.getResponse());
      console.log(response);

      if (response.status === 'success') {
        localStorage.setItem('uuid', response.data.confirm_uuid);
        localStorage.setItem('uuid', response.data.confirm_uuid);
        window.location.href = '/thankyou2';
      } else {
        this.error = 'Произошла ошибка. Пожалуйста, повторите попытку.';
      }
    });
  }

  private validate(): boolean {
    return !(this.code === '' || this.code === undefined);
  }
}
