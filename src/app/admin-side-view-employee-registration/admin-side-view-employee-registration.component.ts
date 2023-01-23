import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-side-view-employee-registration',
  templateUrl: './admin-side-view-employee-registration.component.html',
  styleUrls: ['./admin-side-view-employee-registration.component.css']
})
export class AdminSideViewEmployeeRegistrationComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }
  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0
  getdata:any
  ngOnInit(): void {
    this.getEmploeeRegistration(this.page);
  }

  getEmploeeRegistration(page:any){
    this.AdminService.employeeRegistrationView(this.page).subscribe((res:any)=>{
      this.getdata = res.data.data;
      console.log(this.getdata,"this.getdata")
      this.displaycount = this.page;
      this.totalcount = res.data.count;
      this.pagetotal = Math.ceil(res.data.count / 10);
    })
  }

  Odata(id:any){
    const a = {
      adminStatus: "Approved"
    }
    this.AdminService.updateEmployeeApproved(id,a).subscribe((res:any)=>{

    })

  }
  OdataExcuse(id:any){
    const a = {
      adminStatus: "Rejected"
    }
    this.AdminService.updateEmployeeApproved(id,a).subscribe((res:any)=>{

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
    this.getEmploeeRegistration(this.page);
  }
}
