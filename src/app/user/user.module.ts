import {Api} from "../api.module";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class User {
  userData: any;
  profileUuid: string;

  constructor(private api: Api) {
    this.setProfileUuid();

    setTimeout(() => {
      this.setUserData();
    }, 500);
  }

  dataLoaded(): boolean {
    if (this.userData !== '' && this.userData !== undefined)
      return true;
    else
      return false;
  }

  /**
   * Установить данные пользователя
   */
  setUserData() {
    // https://api.crm.goldadvance.ru/v1/accounts/9c6e4a15-d411-467f-8577-a7cb220a5eae?token=773dc899-96e8-463f-9b59-260297fb2449
    console.log('Used uuid: ' + this.profileUuid);

    // Обращаемся на сервер с данными
    this.api.request('GET', 'users/' + this.profileUuid + '?token=' + localStorage.getItem('auth_token'), {});

    // Записываем полученный UUID в переменную
    setTimeout(() => {
      this.userData = JSON.parse(this.api.getResponse()).data;
      console.log('Data:');
      console.log(this.userData);
    }, 300);
  }

  /**
   * Для начала необходимо установить UUID пользователя
   */
  setProfileUuid() {
    // Обращаемся на сервер с данными
    this.api.request('GET', 'sessions/' + localStorage.getItem('auth_token') + '?token=' + localStorage.getItem('auth_token'), {});

    // Записываем полученный UUID в переменную
    setTimeout(() => {
      this.profileUuid = JSON.parse(this.api.getResponse()).data.user.uuid;
      console.log(this.profileUuid);
      console.log('Set uuid: ' + this.profileUuid);
    }, 300);
  }

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
    return localStorage.getItem('auth_token');
  }
}
