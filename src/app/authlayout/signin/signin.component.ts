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

  constructor (private api: Api) {
  }

  auth(): void {
    var response = this.api.request('POST', 'sessions', {'phone': this.login, 'password': this.password});
    console.log(response);
  }



  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e:any) {
      return new bootstrap.Tooltip(e)
    });
  }

}
