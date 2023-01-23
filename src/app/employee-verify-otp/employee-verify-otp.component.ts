import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employee-verify-otp',
  templateUrl: './employee-verify-otp.component.html',
  styleUrls: ['./employee-verify-otp.component.css']
})
export class EmployeeVerifyOTPComponent implements OnInit {

  verify:any;
  submitted = false;
  lengthcheck: any = 0;
  error_message: any;

 

  constructor(public registrationService : RegistrationService, private router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.verify = new FormGroup({
      otp: new FormControl('', Validators.required),
      mobilenumber: new FormControl()

    });
    this.route.queryParams.subscribe((res: any) => {
      this.mobile = res.mobilenumber;
      console.log(this.mobile,"shdfljkhsdjkfsdhf");
      this.mobilenumberFns(this.mobile);
    });
  }

  mobilenumberFns(mobile:any){
    const a={
      mobilenumber:mobile
    }
   console.log(a,"huhdsd")
   this.registrationService.verifyEmployeeMobile(a).subscribe((res:any)=>{
      console.log(a,"adfdgdfghfh")
    })
  }
  mobile:any
  verify_now(){

    // let local: any = localStorage.getItem('Employeemobilenumber');
    // let token: any = JSON.parse(local).valuedataEmployeer;
   

    this.verify.patchValue({
      mobilenumber: this.mobile,
    });

    this.submitted = true;
    this.lengthcheck = this.verify.get('otp')?.valid ? this.verify.get('otp')?.value : 0;

    this.submitted = true;
    if (this.verify.valid && this.lengthcheck.length == 6)
      this.registrationService.employeVeriFyPassword(this.verify.value).subscribe(
        (res: any) => {
          this.verify.reset();
          this.router.navigate(['employeerLogin']);
        }
        //  error => {
        //   this.error_message = error.error.message;
        // }
      );



    // this.registrationService.employeVeriFyPassword(this.verify.value).subscribe((res:any)=>{
    //   console.log(this.verify.value,"this.verify.value");
    //   this.router.navigate(['employeerLogin'])

    // })

    


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
