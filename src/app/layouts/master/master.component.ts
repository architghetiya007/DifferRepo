import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {

  loggedIn:any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
