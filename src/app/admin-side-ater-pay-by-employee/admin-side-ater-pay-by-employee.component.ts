import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-side-ater-pay-by-employee',
  templateUrl: './admin-side-ater-pay-by-employee.component.html',
  styleUrls: ['./admin-side-ater-pay-by-employee.component.css']
})
export class AdminSideAterPayByEmployeeComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }
  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0
  getdata:any
  ngOnInit(): void {
    this.getDataAfterPayAdmin();
  }

  OdatApprove(id:any){
    const a = {
      active: true
    }
    this.AdminService.updateActiveTrue(id,a).subscribe((res:any)=>{
      console.log(a,"a")
      this.getDataAfterPayAdmin();

    })

  }
  OdataDeactive(id:any){

    const a = {
      active: false
    }
    this.AdminService.updateActiveFalse(id,a).subscribe((res:any)=>{
      console.log(a,"a")
      this.getDataAfterPayAdmin();
    })

  }

  pagination(count: any) {
    if (count == 1) {
      this.page++;
    }
    else if (count == 2) {
      this.page = this.pagetotal - 1;
    }
    else if (count == 3) {
      this.page = 0;
      console.log(this.page)
    }
    else {
      if (this.page > 0) {
        this.page--;
      }
    }
    // this.getcandidateregistration(this.page);
  }

  getDataAfterPayAdmin(){
    this.AdminService.afterPaymentAdminView().subscribe((res:any)=>{
      this.getdata = res.data
      console.log(this.getdata,"this.getdata")
    })
  }

  cvAccess:any;
  jobPost:any;
  jobPostVAlidity:any;
  numberOfMassMailer:any;
  offer:any;
  validityOfPlan:any;


  plandata(cvAccess:any,jobPost:any,jobPostVAlidity:any,numberOfMassMailer:any,offer:any,validityOfPlan:any){
    this.cvAccess = cvAccess;
    this.jobPost = jobPost;
    this.jobPostVAlidity = jobPostVAlidity;
    this.numberOfMassMailer = numberOfMassMailer;
    this.offer = offer;
    this.validityOfPlan = validityOfPlan

  }
  cost:any;
  payAmount:any
  date:any;
  cashType:any

  paymentData(cost:any,offer:any,payAmount:any,date:any,cashType:any){
    this.cost = cost;
    this.offer = offer;
    this.payAmount = payAmount
    this.date = date;
    this.cashType =cashType

  }
  pincode:any;
  name:any;
  companyName:any;
  companyType:any;
  email:any;
  mobileNumber:any
  companyNameData(companyName:any,companyType:any,email:any,mobileNumber:any,name:any,pincode:any){
    this.companyName = companyName;
    this.companyType = companyType;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.name = name;
    this.pincode = pincode

  }



}
