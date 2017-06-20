import { Component, OnInit } from '@angular/core';
import {RegisterService} from"../services/register.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(public registerSvc:RegisterService) { }
   user ={};
  ngOnInit() {
  }

  registerUser(){
    this.registerSvc.userRegistration(this.user)
    .subscribe(result=>{console.log(result)})
  }

}