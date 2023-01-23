import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-manage-plan-view',
  templateUrl: './manage-plan-view.component.html',
  styleUrls: ['./manage-plan-view.component.css']
})
export class ManagePlanViewComponent implements OnInit {


  getDetail:any;
  plandata:any
  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  ngOnInit(): void {
    this.getmanagePlanData();
  }
  getmanagePlanData(){
    this.AdminService.managePlanData().subscribe((res:any)=>{
      this.plandata = res.data
      console.log(this.plandata,"this.plandata")
    })
    
  }
  history(id:any){

  }
  OdatActive(id:any){
    const a  = {
      "active": true
    }
    this.AdminService.updateActive(id,a).subscribe((res:any)=>{
      window.location.reload();
    })

  }
  OdataDisable(id:any){
    const a  = {
      "active": false
    }
    this.AdminService.updateActive(id,a).subscribe((res:any)=>{
      window.location.reload();
    })

  }
  planName:any;
  offer:any;
  validityOfPlan:any;
  validityOfPlanExpiry:any;
  jobPostVAlidity:any;
  jobPostVAlidityExpiry:any;
  numberOfMassMailer:any;
  cost:any
  shopdata(planName:any,offer:any,validityOfPlan:any,validityOfPlanExpiry:any,jobPostVAlidityExpiry:any,jobPostVAlidity:any,numberOfMassMailer:any,cost:any){
    this.planName = planName;
    this.offer = offer;
    this.validityOfPlan = validityOfPlan;
    this.validityOfPlanExpiry = validityOfPlanExpiry;
    this.jobPostVAlidity = jobPostVAlidity;
    this.jobPostVAlidityExpiry = jobPostVAlidityExpiry;
    this.numberOfMassMailer = numberOfMassMailer;
    this.cost = cost;

  }
}
