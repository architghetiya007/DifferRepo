import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-differ-service-address',
  templateUrl: './differ-service-address.component.html',
  styleUrls: ['./differ-service-address.component.css']
})
export class DifferServiceAddressComponent implements OnInit {

  fullAddress = '';
  serviceAddressForm!: FormGroup;
  submitted = false;
  @ViewChild('address') viewChildAddress:any;
  @ViewChild('city') viewChildCity:any;

  constructor(private router: Router, private differServiceList:DifferServiceList) { }

  ngOnInit(): void {
    this.serviceAddressForm = new FormGroup({
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', []),
    });
  }

  get serviceAddressFormHas(): { [key: string]: AbstractControl } {
    return this.serviceAddressForm.controls;
  }


  handleSubmit() {
    this.submitted = true;

    
    this.serviceAddressForm.patchValue({
      address: this.viewChildAddress.nativeElement.value,
      city: this.viewChildCity.nativeElement.value
    });
    
    if (this.serviceAddressForm.invalid) {
      return;
    }
    
    this.fullAddress = this.serviceAddressForm.value.address + ' '+ this.serviceAddressForm.value.city;
    let reqObj = {
      address : this.fullAddress 
    };
    this.differServiceList.differCheckAddress(reqObj).subscribe( (result:any) => {
      if(result['code'] == 200) {
        sessionStorage.removeItem('address') 
        sessionStorage.setItem("address",this.fullAddress);
        this.router.navigate(['/differ-service-list']);      
      } else {
        swal.fire("Our service is not available at your address");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    },(err:any) => {
      console.log(err,"error");
    })
  }
  
  cityChange(event:any) {
    this.serviceAddressForm.patchValue({
      city : event.target.value
    })

  }


}
