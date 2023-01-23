import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
declare let $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public registrationService : RegistrationService,private router: Router) { }
  submitted:any;
  login:any;
  mobilelength:any = 0;
  error_message:any;
  isSuccess: boolean=false;

  ngOnInit(): void {
    this.login =  new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required)

    })
  }

  tokens:any;
  refresh:any;
  gettoken:any;
  users:any;
  datastore:any;
  datastorename:any
  access:any;
  userId:any
  isdisplay = false

  login_now(){


    this.submitted = true;
    if(this.login.valid)
    this.registrationService.loginForm(this.login.value).subscribe((res:any)=>{
      console.log(this.login.value,"lllll")
      // console.log("this.loginForm.value")
      // this.router.navigate(['AdvanceDetailsCandidate']);
      this.router.navigate(['sidebar']);

 
      
       this.access = res.tokens.refresh.token
       console.log(  this.access,"  this.gettoken")
        
       localStorage.setItem("tokenloginCandidate",this.access)

       this.userId = res.user.id
       localStorage.setItem("IDloginCandidate", this.userId)
   
      //  var object = { valuedataloginCan:  res.tokens.refresh.token }
      //  localStorage.setItem("tokenloginCandidate", JSON.stringify(object));


       
    }, error =>{
      error.message
      this.isdisplay = true
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
