import { Component, OnInit } from '@angular/core';
import {User} from "../../user/user.module";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [User]
})

export class HomeComponent implements OnInit {
  isChecked: boolean = false;

  constructor(public user: User) {

  }

  ngOnInit(): void {

  }

  ngAfterInit(){

  }

  doCheck() {
    let html = document.getElementsByTagName('html')[0];
    this.isChecked = !this.isChecked;
    if (this.isChecked == true) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
  }

}
