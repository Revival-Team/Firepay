import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { NouisliderModule } from 'ng2-nouislider';import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { Daterangepicker } from 'ng2-daterangepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { ApphomelayoutComponent } from './apphomelayout/apphomelayout.component';
import { AppinnerlayoutComponent } from './appinnerlayout/appinnerlayout.component';
import { LandingComponent } from './authlayout/landing/landing.component';
import { SigninComponent } from './authlayout/signin/signin.component';
import { SignupComponent } from './authlayout/signup/signup.component';
import { ForgetpasswordComponent } from './authlayout/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './authlayout/resetpassword/resetpassword.component';
import { VerifyComponent } from './authlayout/verify/verify.component';
import { ThankyouComponent } from './authlayout/thankyou/thankyou.component';
import { StaticfooterComponent } from './apphomelayout/partials/staticfooter/staticfooter.component';
import { HeadermenuComponent } from './apphomelayout/partials/headermenu/headermenu.component';
import { SidebarComponent } from './apphomelayout/partials/sidebar/sidebar.component';
import { HomeComponent } from './apphomelayout/home/home.component';
import { StatsComponent } from './apphomelayout/stats/stats.component';

import { BarchartComponent } from './apphomelayout/stats/barchart/barchart.component';
import { ProfileComponent } from './apphomelayout/profile/profile.component';
import { StyleComponent } from './appinnerlayout/style/style.component';
import { FooterinfoComponent } from './appinnerlayout/partials/footerinfo/footerinfo.component';
import { HeaderbackComponent } from './appinnerlayout/partials/headerback/headerback.component';
import { ChatlistComponent } from './appinnerlayout/chatlist/chatlist.component';
import { MessagesComponent } from './appinnerlayout/messages/messages.component';
import { NotificationsComponent } from './appinnerlayout/notifications/notifications.component';
import { PagesComponent } from './appinnerlayout/pages/pages.component';
import { SettingsComponent } from './appinnerlayout/settings/settings.component';
import { FaqsComponent } from './appinnerlayout/faqs/faqs.component';
import { TimelineComponent } from './appinnerlayout/timeline/timeline.component';
import { UserlistComponent } from './appinnerlayout/userlist/userlist.component';
import { ContactusComponent } from './appinnerlayout/contactus/contactus.component';
import { PagenotfoundComponent } from './appinnerlayout/pagenotfound/pagenotfound.component';
import { BlogComponent } from './appinnerlayout/blog/blog.component';
import { BlogdetailsComponent } from './appinnerlayout/blogdetails/blogdetails.component';
import { SplashComponent } from './authlayout/splash/splash.component';
import { Thankyou2Component } from './authlayout/thankyou2/thankyou2.component';
import { DoughnutChartComponent } from './apphomelayout/stats/doughnut-chart/doughnut-chart.component';
import { SmallchartoneComponent } from './apphomelayout/stats/smallchartone/smallchartone.component';
import { SmallcharthreeComponent } from './apphomelayout/stats/smallcharthree/smallcharthree.component';
import { PayComponent } from './appinnerlayout/pay/pay.component';
import { SendmoneyComponent } from './appinnerlayout/sendmoney/sendmoney.component';
import { ReceivemoneyComponent } from './appinnerlayout/receivemoney/receivemoney.component';
import { BillsComponent } from './appinnerlayout/bills/bills.component';
import { RewardsComponent } from './appinnerlayout/rewards/rewards.component';
import { WalletComponent } from './apphomelayout/wallet/wallet.component';
import { DoughnutchartwalletComponent } from './apphomelayout/wallet/doughnutchartwallet/doughnutchartwallet.component';
import { AllreceivemoneyComponent } from './appinnerlayout/allreceivemoney/allreceivemoney.component';
import { WithdrawComponent } from './appinnerlayout/withdraw/withdraw.component';
import { AddmoneyComponent } from './appinnerlayout/addmoney/addmoney.component';
import { AboutusComponent } from './appinnerlayout/aboutus/aboutus.component';
import { TermsandconditionsComponent } from './authlayout/termsandconditions/termsandconditions.component';
import { ShopComponent } from './apphomelayout/shop/shop.component';
import { SmallchartwalletComponent } from './apphomelayout/wallet/smallchartwallet/smallchartwallet.component';
import { AllproductsComponent } from './appinnerlayout/allproducts/allproducts.component';
import { ProductsComponent } from './appinnerlayout/products/products.component';
import { MyordersComponent } from './appinnerlayout/myorders/myorders.component';
import { CartComponent } from './appinnerlayout/cart/cart.component';
import { AddressComponent } from './appinnerlayout/address/address.component';
import { AddaddressComponent } from './appinnerlayout/addaddress/addaddress.component';
import { PaymentComponent } from './appinnerlayout/payment/payment.component';
import { InvoiceComponent } from './appinnerlayout/invoice/invoice.component';
import { TrackorderComponent } from './appinnerlayout/trackorder/trackorder.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthlayoutComponent,
    ApphomelayoutComponent,
    AppinnerlayoutComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    VerifyComponent,
    ThankyouComponent,
    StaticfooterComponent,
    HeadermenuComponent,
    SidebarComponent,
    HomeComponent,
    StatsComponent,
    BarchartComponent,
    ProfileComponent,
    StyleComponent,
    FooterinfoComponent,
    HeaderbackComponent,
    ChatlistComponent,
    MessagesComponent,
    NotificationsComponent,
    PagesComponent,
    SettingsComponent,
    FaqsComponent,
    TimelineComponent,
    UserlistComponent,
    ContactusComponent,
    PagenotfoundComponent,
    BlogComponent,
    BlogdetailsComponent,
    SplashComponent,
    Thankyou2Component,
    DoughnutChartComponent,
    SmallchartoneComponent,
    SmallcharthreeComponent,
    PayComponent,
    SendmoneyComponent,
    ReceivemoneyComponent,
    BillsComponent,
    RewardsComponent,
    WalletComponent,
    DoughnutchartwalletComponent,
    AllreceivemoneyComponent,
    WithdrawComponent,
    AddmoneyComponent,
    AboutusComponent,
    TermsandconditionsComponent,
    ShopComponent,
    SmallchartwalletComponent,
    AllproductsComponent,
    ProductsComponent,
    MyordersComponent,
    CartComponent,
    AddressComponent,
    AddaddressComponent,
    PaymentComponent,
    InvoiceComponent,
    TrackorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    NouisliderModule,
    FullCalendarModule,
    Daterangepicker,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
