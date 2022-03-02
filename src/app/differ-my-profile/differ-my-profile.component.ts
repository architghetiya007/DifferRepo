import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DifferServiceList } from './../differ-service-list/differ-service-list.service';
// import { AuthService } from './../register/auth.service';
import swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-differ-my-profile',
  templateUrl: './differ-my-profile.component.html',
  styleUrls: ['./differ-my-profile.component.css']
})
export class DifferMyProfileComponent implements OnInit {

  constructor(private differServiceList:DifferServiceList) { }
  
  myProfileForm!: FormGroup;
  mySubscriptionForm!: FormGroup;
  MyNetworkForm!: FormGroup;
  submitted1 = false;
  submitted2 = false;
  submitted3 = false;

  ngOnInit(): void {
    this.myProfileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30) ]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
      birthday: new FormControl('', [Validators.required ]),
    });

    this.mySubscriptionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
    });

    this.MyNetworkForm = new FormGroup({
      SSID: new FormControl('', [Validators.required ]),
      NetworkPassword: new FormControl('', [Validators.required ]),
    });

    this.prefilledValue();
    this.getNetworkInfo();
  }

  get myProfileFormHas(): { [key: string]: AbstractControl } {
    return this.myProfileForm.controls;
  }

  get mySubscriptionFormHas(): { [key: string]: AbstractControl } {
    return this.mySubscriptionForm.controls;
  }

  get MyNetworkFormHas(): { [key: string]: AbstractControl } {
    return this.MyNetworkForm.controls;
  }

  handleSubmit1() {
    this.submitted1 = true;
    if (this.myProfileForm.invalid) {
      return;
    }
    let reqData = {
      email:sessionStorage.getItem('email'),
      firstName: this.myProfileForm.value.firstName,
      lastName: this.myProfileForm.value.lastName,
      password: this.myProfileForm.value.password,
      serviceAddress: this.myProfileForm.value.serviceAddress,
      birthday: this.myProfileForm.value.birthday,
    };
    this.differServiceList.differCustomerInformation(reqData).subscribe((result:any) => {
      console.log(result,"result>>>>>>>>");
      if(result['code'] == 200) {
        swal.fire("profile update successfully...");
      }

    },(err:any) => {
      console.log(err,"error");
    });
  }

  formattedDate:any;
  prefilledValue() {
    let dt = sessionStorage.getItem('birthday');
    if(dt) {
      this.formattedDate = this.convertDate(dt);
    }
    this.myProfileForm.patchValue({
      firstName: sessionStorage.getItem('firstName') ,
      lastName: sessionStorage.getItem('lastName') ,
      password: sessionStorage.getItem('password') ,
      serviceAddress: sessionStorage.getItem('address') ,
      birthday : new Date(this.formattedDate[0]+'/'+this.formattedDate[1]+'/'+this.formattedDate[2])
    });
  }

  handleSubmit2() {
    this.submitted2 = true;
    if (this.mySubscriptionForm.invalid) {
      return;
    }
  }

  handleSubmit3() {
    this.submitted3 = true;
    if (this.MyNetworkForm.invalid) {
      return;
    }
  }

  convertDate(str:any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day];
  }

  DeviceArr:any = [];
  getNetworkInfo() {
    let reqObj = {
      email:sessionStorage.getItem('email')
    }
    this.differServiceList.differGetNetworkInfo(reqObj).subscribe((result:any) => {
      console.log(result,"result>>>>>>>>>>>>>>>>>");
      if(result['code'] == 200 ) {
        
        result.data.devices.forEach((element:any) => {
          this.DeviceArr.push(element)
        });
         this.MyNetworkForm.patchValue({
          SSID: result.data.ssid,
          NetworkPassword :result.data.wpa2_key,
         });
        console.log(this.MyNetworkForm.value,"value>");
        
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }
  

}
