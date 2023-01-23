import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
declare let $: any

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  login:any;
  submitted = false;
  error_message:any;
  AdminuserId:any
  refresh:any
  ngOnInit(): void {
    this.login = new FormGroup({
      email :  new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password :  new FormControl('', Validators.required)
    })
  }
isdisplay = false;
  login_now(){
    this.submitted = true;
    if(this.login.valid)
    this.AdminService.submitAdminlogin(this.login.value).subscribe((res:any)=>{
      console.log(this.login.value,"this.login.value")

      this.refresh = res.tokens.refresh.token
      console.log(  this.refresh,"  this.gettoken")
       
      localStorage.setItem("tokenloginAdmin",this.refresh)

      this.AdminuserId = res.user._id
      localStorage.setItem("IDloginAdmin", this.AdminuserId)
      this.router.navigate(['ManagePlanView']);

    }, error =>{
      error.message
      this.isdisplay = true
      console.log(error.message,"ppppp")
    })

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
