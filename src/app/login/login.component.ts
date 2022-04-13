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
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private differServiceList:DifferServiceList) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', [Validators.required ]),
    });
  }

  get loginFormHas(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  async handleSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.differServiceList.login(reqData).subscribe((result: any) => {
      console.log("result>>>>>>>>>>>>>>>",result);
      if (result['code'] == 200) {
        sessionStorage.setItem('token', result.data.token);
        this.router.navigate(['/differ-checkout']);
      }
      else {
        swal.fire(result.message);
      }
    },
      (err: any) => {
        console.log(err, "error");
      });
  }



}
