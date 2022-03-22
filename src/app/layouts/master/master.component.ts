import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {

  loggedIn :any; 
  
  constructor(private router:Router) { }
  
  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['differ-service-address']);
    this.loggedIn = '';
  } 
}
