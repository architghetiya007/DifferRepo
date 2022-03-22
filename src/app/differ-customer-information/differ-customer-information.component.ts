import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DifferServiceList } from "./../differ-service-list/differ-service-list.service";
// import { AuthService } from './../register/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-differ-customer-information',
  templateUrl: './differ-customer-information.component.html',
  styleUrls: ['./differ-customer-information.component.css']
})
export class DifferCustomerInformationComponent implements OnInit {

  InformationForm!: FormGroup;
  submitted = false;
  model: any;
  constructor(private router: Router, private differServiceList: DifferServiceList) { }


  ngOnInit(): void {
    this.InformationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70)]),
      birthday: new FormControl('', [Validators.required,]),
    });

    this.prefilledEmail();
  }

  prefilledEmail() {
    if(sessionStorage.getItem('email')) {
      this.InformationForm.patchValue({
        email: sessionStorage.getItem('email'),
        serviceAddress: sessionStorage.getItem('address')
      })
    }
  }

  get informationFormHas(): { [key: string]: AbstractControl } {
    return this.InformationForm.controls;
  }

  handleSubmit() {
    this.submitted = true;
    if (this.InformationForm.invalid) {
      return;
    }
 
    sessionStorage.setItem('birthday',this.InformationForm.value.birthday);
    sessionStorage.setItem('firstName',this.InformationForm.value.firstName);
    sessionStorage.setItem('lastName',this.InformationForm.value.lastName);
    
    let reqData = {
      email: this.InformationForm.value.email,
      firstName: this.InformationForm.value.firstName,
      lastName: this.InformationForm.value.lastName,
      password: this.InformationForm.value.password,
      serviceAddress: this.InformationForm.value.serviceAddress,
      birthday: this.InformationForm.value.birthday,
    };
    this.differServiceList.differCustomerInformation(reqData).subscribe((result: any) => {
      if (result['code'] == 200) {
        sessionStorage.setItem('token',result.data.token);
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
