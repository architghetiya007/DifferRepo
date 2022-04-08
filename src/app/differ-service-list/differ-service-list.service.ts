import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DifferServiceList {

  constructor(private http:HttpClient) { }

  differItemList() {
    return this.http.get("http://localhost:3000/api/v1/auth/chargebee-item-list");
  }

  differCreateCustomer(data:any) {
    return this.http.post("http://localhost:3000/api/v1/auth/chargebee-user-list",data);
  }

  differSignUpVerifyOTP(data:any) {
    return this.http.put("http://localhost:3000/api/v1/auth/verify-mail",data);
  }

  differCustomerInformation(data:any) {
    return this.http.put("http://localhost:3000/api/v1/auth/chargebee-save-user-detail",data);
  }

  differGetNetworkInfo(data:any) {
    return this.http.put("http://localhost:3000/api/v1/auth/chargebee-network",data);
  }

  differUpdateNetworkInfo(data:any) {
    return this.http.put("http://localhost:3000/api/v1/auth/chargebee-update-network",data);
  }

  differGetUserInfo() {
    return this.http.get("http://localhost:3000/api/v1/auth/chargebee-get-user-detail");
  }

  differCheckOut(data:any) {
    return this.http.post("http://localhost:3000/api/v1/auth/chargebee-checkout",data);
  }

  differGetSubscriptionList() {
    return this.http.get("http://localhost:3000/api/v1/auth/chargebee-subscription-list");
  }

  differChangeSubscription(data:any) {
    return this.http.put("http://localhost:3000/api/v1/auth/chargebee-update-subscription",data);
  }

  differChangebillingDetail(data:any) {
    return this.http.put("http://localhost:3000/api/v1/auth/chargebee-update-billing-detail",data);
  }

  differSignup(data:any) {
    return this.http.post("http://localhost:3000/api/v1/auth/chargebee-signup",data);
  }

  differSubscriptionList() {
    return this.http.get("http://localhost:3000/api/v1/auth/chargebee-subscription-list");
  }


}
