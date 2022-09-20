import { Component, OnInit } from '@angular/core';
import {User} from "../../../user/user.module";

@Component({
  providers: [User],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(public user: User) { }

  ngOnInit(): void {

  }

  menuclose() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('menu-open');
  }
}
