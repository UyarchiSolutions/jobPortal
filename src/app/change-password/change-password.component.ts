import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
declare let $: any

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  submitted = false;
  error_message: any;

  constructor(public registrationService : RegistrationService,public route: Router) { }

  setpassword = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),

  })

  ngOnInit(): void {
   
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

  // local = localStorage.getItem('canid');

  setpassword_now(){

    console.log(localStorage.getItem('canid'),"bgsdjhkfsbgdfjhsfgsdjfhsdfjh")
    // const a = {
    //   id : localStorage.getItem('canid')
    // }
    this.submitted = true;
    if(this.setpassword.valid)
    this.registrationService.changePassword(localStorage.getItem('ForgostPassID'),this.setpassword.value).subscribe((res:any)=>{
      console.log(this.setpassword.value,"this.setpassword.value")
      this.route.navigate(['/login'])

    })

  }

}
