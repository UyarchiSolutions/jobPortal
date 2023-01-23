import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-forgot-verify-otp',
  templateUrl: './forgot-verify-otp.component.html',
  styleUrls: ['./forgot-verify-otp.component.css']
})
export class ForgotVerifyOtpComponent implements OnInit {

  verify:any

  constructor(public registrationService : RegistrationService,private router: Router) { }

  ngOnInit(): void {
    this.verify = new FormGroup({
      otp : new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required)
    })
  }
  datastore:any
  verify_now(){

    let local: any = localStorage.getItem('forgotMobile');
    
    console.log(local, 'token');

    this.verify.patchValue({
      mobilenumber: local
    });

    this.registrationService.forgotVerifyOpt(this.verify.value).subscribe((res:any)=>{
      this.datastore = res.id
      localStorage.setItem("ForgostPassID",this.datastore)
      this.router.navigate(['changePassword'])
   
    })
  }
  lengthcheck: any = 0;
  error_message: any;
  submitted = false;

  keyPress(event: KeyboardEvent, val: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    } else {
      if (val.target.value.length > 5) {
        event.preventDefault();
      }
    }
    console.log(this.verify);
  }
}
