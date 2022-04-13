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
  selector: 'app-differ-signup',
  templateUrl: './differ-signup.component.html',
  styleUrls: ['./differ-signup.component.css']
})
export class DifferSignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private differServiceList:DifferServiceList) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
    });
  }

  get signupFormHas(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
  
  customer : any;
  async handleSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    sessionStorage.setItem('email',this.signupForm.value.email);
    let reqData = {
      address:sessionStorage.getItem('address'),
      selectedId:sessionStorage.getItem('selectedId'),
      email: this.signupForm.value.email,
    }
    this.differServiceList.differCreateCustomer(reqData).subscribe(async (result:any) => {
      if(result['code'] == 201 ) {
        this.router.navigate(['/login']);
      }
      if(result['code'] == 200 || result['code'] == 204) {
        this.customer = result['data'];
        this.router.navigate(['/differ-signup-verify']);
      }
    }, 
    (err:any) => {
      console.log(err,"error");
    });
  }
}
