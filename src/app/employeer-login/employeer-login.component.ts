import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
declare let $: any

@Component({
  selector: 'app-employeer-login',
  templateUrl: './employeer-login.component.html',
  styleUrls: ['./employeer-login.component.css']
})
export class EmployeerLoginComponent implements OnInit {
  login:any
  submitted = false;
  error_message:any;
  isdisplay = false
  constructor(public registrationService : RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl('', Validators.required)
    })
  }
  access:any;
  userId:any
  login_now(){

    this.submitted = true;
    if(this.login.valid)
    this.registrationService.loginFormEmployee(this.login.value).subscribe((res:any)=>{
      console.log(this.login.value,"lllll")
      this.access = res.tokens.refresh.token
      console.log(  this.access,"  this.gettoken")
       
      localStorage.setItem("tokenloginEmplooyeee",this.access)

      this.userId = res.user._id
      localStorage.setItem("IDloginEmployee", this.userId)
      this.router.navigate(['EmployersideBar']);

    }, error =>{
      error.error.message
      this.isdisplay = true;
      console.log(error.error.message,"ppppp")
    }
    )



  }

  show_password(event: any, icon: any) {
    console.log(event)
    if ($(event).attr('type') == 'text') {
      $(event).attr('type', 'password');
      $(icon.target).addClass('show_now');

    }
    else {
      $(event).attr('type', 'text');
      $(icon.target).removeClass('show_now');
    }

  }

}
