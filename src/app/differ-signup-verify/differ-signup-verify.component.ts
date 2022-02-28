import { Component, OnInit, ViewChildren } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Key } from 'protractor';
import swal from 'sweetalert2';
import { DifferServiceList } from './../differ-service-list/differ-service-list.service'

@Component({
  selector: 'app-differ-signup-verify',
  templateUrl: './differ-signup-verify.component.html',
  styleUrls: ['./differ-signup-verify.component.css']
})

export class DifferSignupVerifyComponent implements OnInit {

  signupVerifyForm!: FormGroup;
  submitted = false;
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;
  
  constructor(private router: Router, private differServiceList:DifferServiceList) {
    this.signupVerifyForm = this.toFormGroup(this.formInput);
  }

  toFormGroup(elements:any) {
    const group: any = {};

    elements.forEach((key:any) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  ngOnInit(): void {
    // this.signupVerifyForm = new FormGroup({
    //   emailOTP: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6) ]),
    // });
  }

  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1 ;
    } else {
      pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
      this.rows._results[pos].nativeElement.focus();
    }
  }

  get signupVerifyFormHas(): { [key: string]: AbstractControl } {
    return this.signupVerifyForm.controls;
  }

  OTP:any = [];
  FULL_OTP:any = [];
  handleSubmit() {
    this.submitted = true;
    if (this.signupVerifyForm.invalid) {
      return;
    }

    let obj = { 
      ...this.signupVerifyForm.value
    };

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          this.OTP.push(obj[key]);
      }
    }

    this.FULL_OTP = this.OTP.join('');
    console.log(this.FULL_OTP);
    
    let reqData = {
      email:sessionStorage.getItem('email'),
      FULL_OTP: this.FULL_OTP,
    }
    this.differServiceList.differSignUpVerifyOTP(reqData).subscribe((result:any) => {
      if(result['code'] == 200 ) {
        this.router.navigate(['/differ-customer-information']);
      }
      else {
        this.signupVerifyForm.reset();
        this.FULL_OTP = [];
        this.OTP = [];
        swal.fire('OTP is Invalid');
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }

}
