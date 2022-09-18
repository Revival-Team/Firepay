import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou2',
  templateUrl: './thankyou2.component.html',
  styleUrls: ['./thankyou2.component.scss']
})
export class Thankyou2Component implements OnInit {

  constructor() {
    if (localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== null) {
      document.location.href = '/home';
    }
  }

  ngOnInit(): void {
  }

}
