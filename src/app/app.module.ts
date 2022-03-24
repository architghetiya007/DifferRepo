import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './config/http.interceptor';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule }  from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DifferServiceAddressComponent } from './differ-service-address/differ-service-address.component';
import { DifferServiceListComponent } from './differ-service-list/differ-service-list.component';
import { DifferSignupComponent } from './differ-signup/differ-signup.component';
import { DifferSignupVerifyComponent } from './differ-signup-verify/differ-signup-verify.component';
import { DifferCustomerInformationComponent } from './differ-customer-information/differ-customer-information.component';
import { DifferNavBarComponent } from './differ-nav-bar/differ-nav-bar.component';
import { DifferMyProfileComponent } from './differ-my-profile/differ-my-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MasterComponent } from './layouts/master/master.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DifferServiceAddressComponent,
    DifferServiceListComponent,
    DifferSignupComponent,
    DifferSignupVerifyComponent,
    DifferCustomerInformationComponent,
    DifferNavBarComponent,
    DifferMyProfileComponent,
    CheckoutComponent,
    MasterComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    NgxSmartModalModule.forRoot(),
    NgbModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    NgxSmartModalService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
