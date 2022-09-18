import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {Api} from "../../api.module";

@Component({
  selector: 'app-signin',
  templateUrl: './logout.component.html',
  providers: [Api]
})


export class LogoutComponent implements OnInit {
  constructor () {
    localStorage.removeItem('auth_token');
    console.log(localStorage.getItem('auth_token'));
    window.location.href = '/signin';
  }

  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e:any) {
      return new bootstrap.Tooltip(e)
    });
  }

}
