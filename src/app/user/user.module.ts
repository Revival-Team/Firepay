import {Api} from "../api.module";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class User {
  constructor(private api: Api) {}

  setGuestToken() {
    let createToken = this.api.request('POST', 'sessions', {});

    setTimeout(() => {
      if (!localStorage.getItem('guest_token')) {
        var response = JSON.parse(this.api.getResponse());
        localStorage.setItem('guest_token', response.data.token);
      }

      console.log(localStorage.getItem('guest_token'));
    }, 200);

    // sessionStorage.setItem();
  }

  checkUserAuth(): boolean {
    return !!this.getUserToken();
  }

  getUserToken() {
    return sessionStorage.getItem("guest_auth");
  }
}
