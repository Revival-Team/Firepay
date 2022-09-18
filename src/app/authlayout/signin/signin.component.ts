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
  login: string;
  password: string;
  error: string;

  constructor (private api: Api) {}

  auth(): void {
    if (this.checkInputs()) {
      var request = this.api.request('POST', 'sessions', {'phone': this.login, 'password': this.password});

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
    var response = JSON.stringify(this.api.getResponse());
    var responseData = JSON.parse(response);

    console.log(responseData);

    if (responseData.status == 'error') {
      this.error = responseData.message;

      if (responseData.message === 'bad phone') {

      }
    }
  }

  checkInputs(): boolean {
    return !(this.login == '' || this.password == '' || this.login == undefined || this.password == undefined);
  }



  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e:any) {
      return new bootstrap.Tooltip(e)
    });
  }

}
