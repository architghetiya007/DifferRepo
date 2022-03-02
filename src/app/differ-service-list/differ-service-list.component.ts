import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DifferServiceList } from './differ-service-list.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-differ-service-list',
  templateUrl: './differ-service-list.component.html',
  styleUrls: ['./differ-service-list.component.css']
})
export class DifferServiceListComponent implements OnInit {
  public address : any = "";
  public serviceList: any = [1,2,3];

  constructor(private router: Router, private differServiceList:DifferServiceList) { }

  ngOnInit(): void {
    this.address = sessionStorage.getItem('address');
    this.getItemList();  
  }

  handleServiceClick(data:any) {
    // console.log("data>>>>>>>>>>>>>>>>>>>",data);
    sessionStorage.setItem("selectedId",data.item.id);
    this.router.navigate(['/differ-signup']);
  }

  serviceItemList : any = [];
  getItemList() {
    this.differServiceList.differItemList().subscribe((result:any) => {
      console.log(result,"result>>>>>>>>>>>>>>>>>");
      if(result['code'] == 200 ) {
        this.serviceItemList = result['data']['list'];
        console.log(this.serviceItemList)
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }
  
}
