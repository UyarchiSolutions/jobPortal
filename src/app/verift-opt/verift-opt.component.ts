import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-verift-opt',
  templateUrl: './verift-opt.component.html',
  styleUrls: ['./verift-opt.component.css'],
})
export class VeriftOPTComponent implements OnInit {
  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) {}

  verify: any;
  submitted: any;
  lengthcheck: any = 0;
  error_message: any;
  mobile:any

  ngOnInit(): void {
    this.verify = new FormGroup({
      otp: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required)
      
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
    this.registrationService.verifyMobile(a).subscribe((res:any)=>{
      console.log(a,"adfdgdfghfh")
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

  verify_now() {
 
    this.verify.patchValue({
      mobilenumber: this.mobile,
    });
    console.log(this.verify.get('mobile')?.value,"mobile")

    this.submitted = true;
    this.lengthcheck = this.verify.get('otp')?.valid ? this.verify.get('otp')?.value : 0;

    this.submitted = true;
    if (this.verify.get('otp')?.value && this.lengthcheck.length == 6)
      this.registrationService.verify_otp(this.verify.value).subscribe((res: any) => {
          this.verify.reset();
          this.router.navigate(['login']);
        }
      );
  }
}
