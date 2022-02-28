import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  first_name: any;
  last_name: any;
  email: any;
  company: any;
  phone: any;
  cbInstance: any;
  loading: any;
  errMsg: any;

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
  }

  getFormUrlEncoded(toConvert:any) {
		const formBody = [];
		for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      if(toConvert[property]) {
        const encodedValue = encodeURIComponent(toConvert[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
		}
		return formBody.join('&');
	} 
  ngOnInit() {
    this.cbInstance = (window as { [key: string]: any })['Chargebee'].init({
      site: "archittest-test"
    });
  }

  openCheckout() {
    this.cbInstance.openCheckout({
      hostedPage: () => {
        this.loading = true;
        // Hit your end point that returns hosted page object as response
        // This sample end point will call checkout new api
        // https://apidocs.chargebee.com/docs/api/hosted_pages#checkout_new_subscription
        // If you want to use paypal, go cardless and plaid, pass embed parameter as false
        let data = {
          plan_id: "silver",
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          company: this.company
        }
        return this.http.post("http://localhost:3000/api/v1/auth/chargebee-checkout", this.getFormUrlEncoded(data), {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})}).toPromise();
      },
      loaded: () => {
        console.log("checkout opened");
      },
      error: () => {
        this.loading = false;
        this.ref.markForCheck();
        this.errMsg = true;
      },
      close: () => {;
        this.loading = false;
        this.ref.detectChanges();
        console.log("checkout closed");
      },
      success: (hostedPageId:any) => {
        console.log(hostedPageId);
        // Hosted page id will be unique token for the checkout that happened
        // You can pass this hosted page id to your backend 
        // and then call our retrieve hosted page api to get subscription details
        // https://apidocs.chargebee.com/docs/api/hosted_pages#retrieve_a_hosted_page
      },
      step: (value:any) => {
          // value -> which step in checkout
          console.log(value);
      }
    });
  }

}
