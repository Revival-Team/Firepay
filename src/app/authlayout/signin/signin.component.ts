import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {Api} from "../../api.module";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [Api]
})


export class SigninComponent implements OnInit {
  phone: string;
  password: string;
  error: string;

  constructor (private api: Api) {
    if (localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== null) {
      document.location.href = '/home';
    }
  }

  auth(): void {
    if (this.checkInputs()) {
      var request = this.api.request('POST', 'sessions', {'phone': this.phone, 'password': this.password});

      setTimeout(() => {
        this.proceedAuth();
      }, 300);

      // Очистим ошибки
      this.error = '';
    } else {
      // Вернем ошибку
      this.error = 'Пожалуйста, заполните поля.'
    }
  }

  proceedAuth(): void {
    var response = JSON.parse(this.api.getResponse());

    console.log(response);

    if (response.status == 'error') {
      this.error = 'Введены неверные данные.';
    } else {
      localStorage.setItem('auth_token', response.data.token);
      window.location.href = '/home';
      console.log(localStorage.getItem('auth_token'));
    }
  }

  checkInputs(): boolean {
    return !(this.phone == '' || this.password == '' || this.phone == undefined || this.password == undefined);
  }



  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e:any) {
      return new bootstrap.Tooltip(e)
    });
  }

}
