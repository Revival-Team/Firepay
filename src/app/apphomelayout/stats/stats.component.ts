import {Component, NgModule, OnInit} from '@angular/core';
import {Api} from "../../api.module";
import {User} from "../../user/user.module";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {
  public daterange: any = {};

  public options: any = {
    locale: { format: 'DD-MM-YYYY', direction: 'daterange-center shadow'},
    alwaysShowCalendars: false,
  };

  public transactions = undefined;


  public selectedDate(value: any, datepicker?: any) {

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

  }

  constructor(private api: Api, private user: User) {
    this.loadTransactions();
  }

  ngOnInit(): void {
  }

  loadTransactions(): void {
    this.api.request('GET', 'finance?token=' + this.user.getUserToken(), {});

    setTimeout(() => {
      console.clear();

      let response = JSON.parse(this.api.getResponse());
      this.transactions = response.data.data;
      console.log('Excepted:');
      console.warn(response);
    }, 1000);
  }
}
