import { Component, OnInit } from '@angular/core';
import {Api} from "../../api.module";
import {User} from "../../user/user.module";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  public isVisited = false;
  public amount: number;
  public error: string;

  checkVisited() {
    this.isVisited = !this.isVisited;
  }

  constructor(private api: Api, private user: User) {
  }

  ngOnInit(): void {
  }

  withdrawMoney(): void {
    console.log({
      'token': this.user.getUserToken(),
      'finance_type_id': 1,
      'finance_type_code': 'payin',
      'account_to_id': this.user.userData.account.id,
      'pay_method_id': 1,
      'pay_method_code': 'bank_card',
      'currency_to_id': 2,
      'currency_to_code': 'rub',
      'sum': Number(this.amount)
    });

    // Если всё норм, то шлём запрос
    this.api.request('POST', 'finance', {
      'token': this.user.getUserToken(),
      'finance_type_id': 2,
      'finance_type_code': 'payout',
      'account_to_id': this.user.userData.account.id,
      'pay_method_id': 1,
      'pay_method_code': 'bank_card',
      'currency_to_id': 2,
      'currency_to_code': 'rub',
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
