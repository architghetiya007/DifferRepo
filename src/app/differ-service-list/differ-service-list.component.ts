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
  selector: 'app-differ-service-list',
  templateUrl: './differ-service-list.component.html',
  styleUrls: ['./differ-service-list.component.css']
})
export class DifferServiceListComponent implements OnInit {
  public address : any = "123 Main street, A1B 2C3, NB, Canada";
  public serviceList: any = [1,2,3];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleServiceClick() {
    this.router.navigate(['/differ-signup']);
  }

}
