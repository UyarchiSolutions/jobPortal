import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employee-forgot-pass-verify',
  templateUrl: './employee-forgot-pass-verify.component.html',
  styleUrls: ['./employee-forgot-pass-verify.component.css']
})
export class EmployeeForgotPassVerifyComponent implements OnInit {

  verify:any;
  error_message:any;
  submitted = false;
  lengthcheck: any = 0;
  constructor(public registrationService : RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.verify = new FormGroup({
      otp: new FormControl('', Validators.required),
      mobilenumber: new FormControl(),
    })
    

  }
  datastore:any;
  verify_now(){

    
    let local: any = localStorage.getItem('Employeemobilenumber');
    

    console.log(local, 'token');

    this.verify.patchValue({
      mobilenumber: local
    });

    this.submitted = true;
    if(this.verify.valid)
    this.registrationService.employeeForgotVeriOTP(this.verify.value).subscribe((res:any)=>{
      this.datastore = res._id
      localStorage.setItem("ForgotPassEmployeeId",this.datastore)
      this.router.navigate(['employeeSetPassword'])
     
    })

  }

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
