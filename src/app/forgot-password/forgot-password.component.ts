import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public registrationService : RegistrationService, private router: Router) { }

  ForgotPass:any;
  submitted = false;
  error_message:any


  ngOnInit(): void {
    this.ForgotPass = new FormGroup({
      mobilenumber: new FormControl('',Validators.required),
    })

  }
  forgot(){
    this.submitted = true;
    if(this.ForgotPass.valid){
      this.registrationService.ForgotPassApi(this.ForgotPass.value).subscribe((res: any) => {
        // console.log(this.ForgotPass.get('mobilenumber')?.value,"l")
        localStorage.setItem('forgotMobile',this.ForgotPass.get('mobilenumber')?.value)
       
        this.router.navigate(['ForgotVerifyOtp'])
      
      })
    }

  }

}
