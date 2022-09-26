import { Component, OnInit } from '@angular/core';
import {Api} from "../../api.module";
import {User} from "../../user/user.module";
import {interval} from "rxjs";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  error: string;

  amount: number;

  fromCurrency: number;
  toCurrency: number;

  fromCurrencyCode: string;
  toCurrencyCode: string;

  constructor(private api: Api, public user: User) { }

  ngOnInit(): void {
  }

  public editFrom(): void {
    this.fromCurrencyCode = this.setCurrencyCode(this.fromCurrency);
    console.log(this.fromCurrencyCode);
  }

  public editTo(): void {
    this.toCurrencyCode = this.setCurrencyCode(this.toCurrency);
    console.log(this.toCurrencyCode);

  }

  public setCurrencyCode(currencyId: number): string {
    let code = '';

    switch (currencyId) {
      case 1:
        code = 'bonus';
        break;

      case 2:
        code = 'rub';
        break;

      case 3:
        code = 'usd';
        break;

      case 4:
        code = 'eur';
        break;

      case 5:
        code = 'btc';
        break;

      case 6:
        code = 'usdt';
        break;

      default:
        code = 'rub';
        break;
    }

    console.log(code);
    return code;
  }

  public exchange(): void {
    // Если сумма меньше 10 рублей, то вернем ошибку
    if (this.amount < 10 || this.amount === undefined) {
      alert('Минимальная сумма пополнения: 10 рублей!');
      return;
    }

    console.log({
      'token': this.user.getUserToken(),
      'finance_type_id': 4,
      'finance_type_code': 'exchange',
      'account_to_id': this.user.userData.account.id,
      'currency_from_id': this.fromCurrency,
      'currency_from_code': this.fromCurrencyCode,
      'currency_to_id': this.toCurrency,
      'currency_to_code': this.toCurrencyCode,
      'sum': Number(this.amount)
    });

    // Если всё норм, то шлём запрос
    this.api.request('POST', 'finance', {
      'token': this.user.getUserToken(),
      'finance_type_id': 4,
      'finance_type_code': 'exchange',
      'account_to_id': this.user.userData.account.id,
      'currency_from_id': this.fromCurrency,
      'currency_from_code': this.fromCurrencyCode,
      'currency_to_id': this.toCurrency,
      'currency_to_code': this.toCurrencyCode,
      'sum': Number(this.amount)
    });

    setTimeout(() => {
      let response = JSON.parse(this.api.getResponse());
      console.log(response);

      if ('redirect_url' in response)
        window.location.href = response.data.redirect_url;
      else
        this.error = 'Платёжный способ не доступен';
    }, 1000);
  }
}
