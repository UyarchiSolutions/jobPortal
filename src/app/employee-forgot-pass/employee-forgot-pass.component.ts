import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employee-forgot-pass',
  templateUrl: './employee-forgot-pass.component.html',
  styleUrls: ['./employee-forgot-pass.component.css']
})
export class EmployeeForgotPassComponent implements OnInit {

  ForgotPass:any;
  submitted = false;
  error_message: any;

  constructor(public registrationService : RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.ForgotPass = new FormGroup({
      mobilenumber: new FormControl('',Validators.required)
    })
  }

  forgot(){
    this.submitted = true;
    if(this.ForgotPass.valid){
      console.log(this.ForgotPass.value,"pppppppppppp");
      this.registrationService.ForgotPassEmployeeApi(this.ForgotPass.value).subscribe((res: any) => {
        console.log(this.ForgotPass.value,"this.ForgotPass.value")
        this.router.navigate(['EmployeeForgotPassVerify'])
      
      })
    }

  

  }

}
