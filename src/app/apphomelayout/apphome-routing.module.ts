import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { ApphomelayoutComponent } from './apphomelayout.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ShopComponent } from './shop/shop.component';
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {ExchangeComponent} from "./exchange/exchange.component";

const routes: Routes = [
  {
    path:'',
    component: ApphomelayoutComponent,

    children:[
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'stats',
        component: StatsComponent
      },
      {
        path:'shop',
        component: ShopComponent
      },
      {
        path:'wallet',
        component: WalletComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'profile/edit',
        component: ProfileEditComponent
      },
      {
        path: 'wallet/exchange',
        component: ExchangeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class ApphomelayoutRoutingModule { }
