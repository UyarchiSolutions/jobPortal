import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  Adminform:any;
  formsubmited = false
  isdisplay = false
  ngOnInit(): void {
    this.Adminform = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required),
      // confirmpassword:  new FormControl('', Validators.required)
    })

  }
  submit(){
   
    this.formsubmited = true;
    if(this.Adminform.valid){
    this.AdminService.submitAdminRegistration(this.Adminform.value).subscribe((res:any)=>{
      console.log(this.Adminform.value,"this.Adminform.value")
      this.router.navigate(['AdminLogin'])
    },error =>{
      error.message
      this.isdisplay = true
      console.log(error.error.message,"ppppp")
    }
   )
  }

  }

}
