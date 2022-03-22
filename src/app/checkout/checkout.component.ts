import { Component, OnInit } from '@angular/core';
import { DifferServiceList } from './../differ-service-list/differ-service-list.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private differServiceList:DifferServiceList) {
  }
 
  ngOnInit() {
  }

  openCheckout() {
    let reqObj = {
      price_id: sessionStorage.getItem('selectedId')
    }
    this.differServiceList.differCheckOut(reqObj).subscribe((result:any) => {
      if(result['code'] == 200 ) {
        window.location.href= result.data.hosted_page.url
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }

}
