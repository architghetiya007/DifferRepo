import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DifferServiceList } from './../differ-service-list/differ-service-list.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private differServiceList:DifferServiceList,private router:Router) {
  }

  elementName:any;
 
  ngOnInit() {
    this.checkService();
    this.elementName = sessionStorage.getItem('selectedId')
    console.log(this.elementName)
  }

  checkService() {
    this.differServiceList.differSubscriptionList().subscribe( (result:any) => {
      console.log(result.data.length,'result>>>>>>');
      if(result['code'] == 200 || result['code'] == 204) {
          if(result.data.length > 0) {
            this.router.navigate(['/differ-my-profile'])
          }
      }

    }, (err:any) => {
      console.log(err,'err>>>>>>');
    })
  }

  openCheckout() {
    let reqObj = {
      price_id: sessionStorage.getItem('selectedId')
    }
    this.differServiceList.differCheckOut(reqObj).subscribe((result:any) => {
      console.log(result,'result>>>>>>');
      if(result['code'] == 200 ) {
        window.location.href= result.data.hosted_page.url
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }

}
