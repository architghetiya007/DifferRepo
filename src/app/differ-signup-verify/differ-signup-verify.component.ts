import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from './../register/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-differ-signup-verify',
  templateUrl: './differ-signup-verify.component.html',
  styleUrls: ['./differ-signup-verify.component.css']
})
export class DifferSignupVerifyComponent implements OnInit {

  signupVerifyForm!: FormGroup;
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signupVerifyForm = new FormGroup({
      emailOTP: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6) ]),
    });
  }

  get signupVerifyFormHas(): { [key: string]: AbstractControl } {
    return this.signupVerifyForm.controls;
  }

  handleSubmit() {
    this.submitted = true;
    if (this.signupVerifyForm.invalid) {
      return;
    }
    let reqData = {
      email: this.signupVerifyForm.value.email,
    }
    this.router.navigate(['/differ-customer-information']);
    console.log(reqData,"address form value...");
  }

}
