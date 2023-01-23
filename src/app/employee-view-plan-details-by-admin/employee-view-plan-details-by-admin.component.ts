import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-employee-view-plan-details-by-admin',
  templateUrl: './employee-view-plan-details-by-admin.component.html',
  styleUrls: ['./employee-view-plan-details-by-admin.component.css']
})
export class EmployeeViewPlanDetailsByAdminComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  plandata:any;
  PaymentDetails:any;
  ngOnInit(): void {
    this.ViewPlanCreatedByAdmin();
    this.PaymentDetails =  new FormGroup({
      payAmount : new FormControl('', Validators.required),
      cashType : new FormControl('', Validators.required),
      planId: new FormControl('', Validators.required),
      paymentStatus: new FormControl('Paid', Validators.required),
    })
  }
  ViewPlanCreatedByAdmin(){
    this.AdminService.planCreatedByAdminByEmployee().subscribe((res:any)=>{
      this.plandata = res
      console.log(this.plandata,"hfnjlkkkkkkkkkks")
    })

  }
  costpay:any;
  offerpay:any;
  planNamepay:any;
  id:any

  OdatPay(id:any,planName:any,cost:any,offer:any){
    this.costpay = cost;
    this.offerpay = offer;
    this.planNamepay = planName;
    this.id = id;
    console.log(this.id,"this.id")


  }
  offer:any;
  validityOfPlan:any
  validityOfPlanExpiry:any
  jobPostVAlidityExpiry:any
  jobPostVAlidity:any
  numberOfMassMailer:any;
  planName:any;
  cost:any
  shopdata(planName:any,offer:any,validityOfPlan:any,validityOfPlanExpiry:any,jobPostVAlidityExpiry:any,jobPostVAlidity:any,numberOfMassMailer:any,cost:any){

    this.offer = offer;
    this.validityOfPlan = validityOfPlan;
    this.validityOfPlanExpiry = validityOfPlanExpiry;
    this.jobPostVAlidityExpiry = jobPostVAlidityExpiry;
    this.jobPostVAlidity = jobPostVAlidity ;
    this.planName = planName;
    this.cost = cost
     this.numberOfMassMailer = numberOfMassMailer
     console.log(this.cost,"ghjvghhhh")
  }

  submitPay(){
 
  this.PaymentDetails.patchValue({
    planId : this.id,
    paymentStatus :  "Paid"
  })
    console.log(this.id,"planId")
    this.AdminService.paymentsubmit(this.PaymentDetails.value).subscribe((res:any)=>{
      console.log(this.PaymentDetails.value,"this.PaymentDetails.value")
      window.location.reload();
    })

  }

}
