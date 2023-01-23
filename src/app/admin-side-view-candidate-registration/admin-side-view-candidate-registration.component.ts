import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-side-view-candidate-registration',
  templateUrl: './admin-side-view-candidate-registration.component.html',
  styleUrls: ['./admin-side-view-candidate-registration.component.css']
})
export class AdminSideViewCandidateRegistrationComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }
  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0
  ngOnInit(): void {
    this.getcandidateregistration(this.page)
  }

  getdata:any
  getcandidateregistration(page:any){
    this.AdminService.candidateRegistrationView(this.page).subscribe((res:any)=>{
      this.getdata = res.data;
      console.log(this.getdata,"sdhkfglaeikfg");
      this.displaycount = this.page;
      this.totalcount = res.count;
      this.pagetotal = Math.ceil(res.count / 10);
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
    this.getcandidateregistration(this.page);
  }

  Odata(id:any){
    console.log(id,"djKDakldaKDLJK")
    const a = {
      adminStatus: "Approved"
    }
    this.AdminService.ApproveStatusUpdate(id,a).subscribe((res:any)=>{
      this.getcandidateregistration(this.page)
    })
  }
  OdataExcuse(id:any){
    const a = {
      adminStatus: "Rejected"
    }
    this.AdminService.ApproveStatusUpdate(id,a).subscribe((res:any)=>{
      this.getcandidateregistration(this.page)
    })
  }

}
