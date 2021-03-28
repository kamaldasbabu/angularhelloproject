import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginUser(signInFormm: NgForm){
    console.log(signInFormm);
    const id =signInFormm.value.contactid;
    const name = signInFormm.value.contactname;
    console.log(""+id+" "+name);
  }
  ngOnInit(): void {
  }

}
