import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(public registrationService : RegistrationService, private router: Router) { }
  formsubmited = false;
  EmployeeRegistration:any;
  latitude: any;
  longtitude: any;
  lat: any = 13.0827;
  long: any = 80.2707;
  displayMsg = false;
  isdisplay = false;
  verfiyemail = false

  ngOnInit(): void {
    this.EmployeeRegistration = new FormGroup({
      companyName : new FormControl('',[
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl('', Validators.required),
      confirmpassword : new FormControl('', Validators.required),
      companyType : new FormControl('', Validators.required),
      pincode : new FormControl('', Validators.required),
      mobileNumber : new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      long: new FormControl('', Validators.required),
      addressLoaction : new FormControl('')
    })

    navigator.geolocation.getCurrentPosition((position: any) => {
      this.latitude = position.coords.latitude;
      this.longtitude = position.coords.longitude;
      console.log(this.longtitude, "this.longtitude")
      console.log(this.latitude, "this.latitude")
    })
  }

  tokens:any;
  refresh:any;
  gettoken:any;
  usersemp:any;
  datastoreemp:any
  submit(){
    this.EmployeeRegistration.patchValue({
      lat: this.latitude,
      long: this.longtitude
    })
    this.formsubmited = true;
    if(this.EmployeeRegistration.valid)
    this.registrationService.employeeRegister(this.EmployeeRegistration.value).subscribe((res:any)=>{
      this.displayMsg = true
      console.log(this.EmployeeRegistration.value,"this.EmployeeRegistration.value");

      this.tokens = res.tokens;
        console.log(this.tokens,"this.tokens")
         this.refresh = res.tokens.access
         console.log( this.refresh," this.refresh")
         this.gettoken = res.tokens.access.token
         console.log(  this.gettoken,"  this.gettoken")
       
     
         localStorage.setItem("tokendataEmployeer", res.tokens.access.token);

         this.usersemp = res.user;
         this.datastoreemp = res.user._id
         localStorage.setItem("empId",this.datastoreemp)
        // this.EmployeeRegistration.reset();
        this.verfiyemail = true
        console.log(this.verfiyemail, 'this.verfiyemail');
        // this.router.navigate(['EmployeeVerifyOTP']);
        // alert("Please Check Your Email!! Verification Link Sent!!")

    },error => {
      error.message
        this.isdisplay = true
       
        console.log(error.error.message,"ppppp")
    })

  }

  changefloat(vale:any){

     return parseFloat(vale)
  }

  myAddres:any
  draggEnded($event: any) {
    this.EmployeeRegistration.patchValue({
      lat:$event.latLng.lat(),
      long:$event.latLng.lng()
    })
    
    this.registrationService.getAddress($event.latLng.lat(), $event.latLng.lng()).subscribe((res: any) => {
      console.log(res.results)
      if (res.results.length != 0) {
        this.myAddres=res.results[0].formatted_address
        this.EmployeeRegistration.patchValue({
          addressLoaction:this.myAddres
        })
      }
    })
  }
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    this.EmployeeRegistration.patchValue({
      lat: address.geometry.location.lat(),
      long: address.geometry.location.lng()
    })
  }
  parseFloat(int: any) {
    return parseFloat(int);
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };

}
