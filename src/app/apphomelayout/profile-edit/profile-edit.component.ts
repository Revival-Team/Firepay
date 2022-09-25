import { Component, Injectable, OnInit } from '@angular/core';
import {FormsModule, NgModel} from "@angular/forms";
import { User } from "../../user/user.module";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  providers: [User]
})

export class ProfileEditComponent implements OnInit {
  name1: string;
  name2: string;
  name3: string;

  public constructor(public user: User) {
      // this.name1 = user.userData.profile.name1;
      // this.name2 = user.userData.profile.name2;
      // this.name3 = user.userData.profile.name3;
  }

  public ngOnInit(): void {
  }

  public saveAccount(): void {
    console.log(this.user.userData.profile.name1);
  }

}
