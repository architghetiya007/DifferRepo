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

@Component({
  selector: 'app-differ-my-profile',
  templateUrl: './differ-my-profile.component.html',
  styleUrls: ['./differ-my-profile.component.css']
})
export class DifferMyProfileComponent implements OnInit {

  constructor() { }
  
  myProfileForm!: FormGroup;
  mySubscriptionForm!: FormGroup;
  MyNetworkForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.myProfileForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
    });

    this.mySubscriptionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
    });

    this.MyNetworkForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
    });
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
    this.submitted = true;
    if (this.myProfileForm.invalid) {
      return;
    }
  }

  handleSubmit2() {
    this.submitted = true;
    if (this.mySubscriptionForm.invalid) {
      return;
    }
  }

  handleSubmit3() {
    this.submitted = true;
    if (this.MyNetworkForm.invalid) {
      return;
    }
  }

  

}
