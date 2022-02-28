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
  selector: 'app-differ-service-address',
  templateUrl: './differ-service-address.component.html',
  styleUrls: ['./differ-service-address.component.css']
})
export class DifferServiceAddressComponent implements OnInit {

  fullAddress = '';
  serviceAddressForm!: FormGroup;
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.serviceAddressForm = new FormGroup({
      address: new FormControl('', [Validators.required ]),
    });
  }

  get serviceAddressFormHas(): { [key: string]: AbstractControl } {
    return this.serviceAddressForm.controls;
  }

  handleSubmit() {
    this.submitted = true;
    if (this.serviceAddressForm.invalid) {
      return;
    }
    console.log(this.serviceAddressForm.value);
    sessionStorage.removeItem('address') 
    sessionStorage.setItem("address",this.serviceAddressForm.value.address);
    this.router.navigate(['/differ-service-list']);
  }

  
  onchange(event:any) {
    console.log(event,"event");
    if(event.target.value) {
      this.fullAddress = this.fullAddress +event.target.value;
    }
    console.log(this.fullAddress,"fullAddress>>>>>>");
     
  }

  onClick(event:any) {
    console.log("click call",event);
    
  }

}
