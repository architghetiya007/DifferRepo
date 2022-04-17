import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  }

  checkService() {
    this.differServiceList.differSubscriptionList().subscribe( (result:any) => {
      if( result['code'] == 200 ) {
          if(result.data.length > 0) {
            this.router.navigate(['/differ-my-profile'])
          }
      } else if(result['code'] == 204 && ( sessionStorage.getItem('selectedId') == undefined || sessionStorage.getItem('selectedId') == null ) ) {
          Swal.fire("Select Any One Service").then(
            () => {
              this.router.navigate(['/differ-service-list']);
            }
          );
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
      if(result['code'] == 200 ) {
        window.location.href= result.data.hosted_page.url
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }

}
