import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employee-mobile-verify',
  templateUrl: './employee-mobile-verify.component.html',
  styleUrls: ['./employee-mobile-verify.component.css']
})
export class EmployeeMobileVerifyComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  verify: any;
  submitted = false;
  lengthcheck: any = 0;
  error_message: any;
  isdisplay = false;
  mobile:any
  getRefresh:any
  ngOnInit(): void {
    this.verify = new FormGroup({
      mobilenumber: new FormControl('', Validators.required),
     
    });
    this.route.queryParams.subscribe((res: any) => {
      this.mobile = res.mobilenumber;
      console.log(this.mobile,"shdfljkhsdjkfsdhf");
  
    });

  }

  keyPress(event: KeyboardEvent, val: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    } else {
      if (val.target.value.length > 9) {
        event.preventDefault();
      }
    }
    console.log(this.verify);
  }

  verify_now(){

    this.submitted = true;
    if(this.verify.valid )
    this.registrationService.verifyEmployeeMobile(this.verify.value).subscribe((res:any)=>{
      this.router.navigate(['EmployeeVerifyOTP']);

      localStorage.setItem('Employeemobilenumber',this.mobile)
    },error =>{
      error.message
      this.isdisplay = true
      console.log(error.error.message,"ppppp")
    })

  }

}
