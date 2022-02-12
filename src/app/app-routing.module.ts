import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DifferCustomerInformationComponent } from './differ-customer-information/differ-customer-information.component';
import { DifferMyProfileComponent } from './differ-my-profile/differ-my-profile.component';
import { DifferServiceAddressComponent } from './differ-service-address/differ-service-address.component';
import { DifferServiceListComponent } from './differ-service-list/differ-service-list.component';
import { DifferSignupVerifyComponent } from './differ-signup-verify/differ-signup-verify.component';
import { DifferSignupComponent } from './differ-signup/differ-signup.component';
import { RouteGuard } from './route.guard';

const routes: Routes = [
  {
    path : '',
    pathMatch:'full',
    redirectTo:'/differ-service-address',
  },
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
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
