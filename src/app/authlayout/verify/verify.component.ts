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

  constructor(private api: Api) { }

  ngOnInit(): void {

  }

  public sendCode(): void {
    this.api.request('POST', 'users/confirm',
      {'token': localStorage.getItem('guest_token'), 'phone': sessionStorage.getItem('phone'), 'code': this.code});

    console.log({'token': localStorage.getItem('guest_token'), 'phone': sessionStorage.getItem('phone'), 'code': this.code});

    setTimeout(() => {
      let response = JSON.parse(this.api.getResponse());
      console.log(response);

      if (response.status === 'error') {
        this.error = 'Введён неверный код.';
      }
    }, 300);
  }
}
