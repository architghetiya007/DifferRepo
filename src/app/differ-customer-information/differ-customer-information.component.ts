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
  selector: 'app-differ-customer-information',
  templateUrl: './differ-customer-information.component.html',
  styleUrls: ['./differ-customer-information.component.css']
})
export class DifferCustomerInformationComponent implements OnInit {

  InformationForm!: FormGroup;
  submitted = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.InformationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
      serviceAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(70) ]),
    });
  }

  get informationFormHas(): { [key: string]: AbstractControl } {
    return this.InformationForm.controls;
  }



  handleSubmit() {
    this.submitted = true;
    if (this.InformationForm.invalid) {
      return;
    }
    this.router.navigate(['/differ-my-profile']);
  }
}
