import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthlayoutComponent } from './authlayout.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifyComponent } from './verify/verify.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SplashComponent } from './splash/splash.component';
import { Thankyou2Component } from './thankyou2/thankyou2.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
    {
        path: '',
        component: AuthlayoutComponent,
        children: [
            {
                path: '',
                component: SplashComponent,
            },
            {
                path: 'landing',
                component: LandingComponent,
            },
            {
                path: 'signin',
                component: SigninComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            },
            {
              path: 'logout',
              component: LogoutComponent,
            },
            {
                path: 'forgetpassword',
                component: ForgetpasswordComponent,
            },
            {
                path: 'resetpassword',
                component: ResetpasswordComponent,
            },
            {
                path: 'verify',
                component: VerifyComponent,
            },
            {
                path: 'thankyou',
                component: ThankyouComponent,
            },
            {
                path: 'thankyou2',
                component: Thankyou2Component,
            },
            {
                path: 'termsandconditions',
                component: TermsandconditionsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthlayoutRoutingModule { }
