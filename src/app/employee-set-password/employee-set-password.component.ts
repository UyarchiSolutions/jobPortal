import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
declare let $: any
@Component({
  selector: 'app-employee-set-password',
  templateUrl: './employee-set-password.component.html',
  styleUrls: ['./employee-set-password.component.css']
})
export class EmployeeSetPasswordComponent implements OnInit {

  

  setpassword:any;
  error_message:any;
  submitted = false;

  constructor(public registrationService : RegistrationService, private router: Router) { }

  ngOnInit(): void {
   this.setpassword = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
})

  } 

  setpassword_now(){
    this.submitted = true;
    if(this.setpassword.valid)

    this.registrationService.EmployeeSetPassword(localStorage.getItem('ForgotPassEmployeeId'),this.setpassword.value).subscribe((res:any)=>{
      console.log(this.setpassword.value,"this.setpassword.value")
      this.router.navigate(['employeerLogin'])

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
