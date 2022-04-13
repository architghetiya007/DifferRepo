import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DifferCustomerInformationComponent } from './differ-customer-information/differ-customer-information.component';
import { DifferMyProfileComponent } from './differ-my-profile/differ-my-profile.component';
import { DifferServiceAddressComponent } from './differ-service-address/differ-service-address.component';
import { DifferServiceListComponent } from './differ-service-list/differ-service-list.component';
import { DifferSignupVerifyComponent } from './differ-signup-verify/differ-signup-verify.component';
import { DifferSignupComponent } from './differ-signup/differ-signup.component';
import { RouteGuard } from './route.guard';
import { MasterComponent } from './layouts/master/master.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    pathMatch:'full',
    redirectTo:'/differ-service-address',
  },
  {
    path : '',
    component: MasterComponent,
    children: [
      {
        path: 'differ-service-address',
        component: DifferServiceAddressComponent,
      },
      {
        path: 'differ-service-list',
        component: DifferServiceListComponent,
      },
      {
        path: 'differ-signup',
        component: DifferSignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'differ-signup-verify',
        component: DifferSignupVerifyComponent,
      },
      {
        path: 'differ-customer-information',
        component: DifferCustomerInformationComponent,
      },
      {
        path: 'differ-my-profile',
        component: DifferMyProfileComponent,
        canActivate: [RouteGuard]
      },
      {
        path: 'differ-checkout',
        component: CheckoutComponent,
        canActivate: [RouteGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
