import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-view-job-posting',
  templateUrl: './admin-view-job-posting.component.html',
  styleUrls: ['./admin-view-job-posting.component.css']
})
export class AdminViewJobPostingComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0

  ngOnInit(): void {
    this.getJobPosting(this.page);
  }
  getdata:any
  getJobPosting(page:any){
    this.AdminService.getJobPostingView(this.page).subscribe((res:any)=>{
      this.getdata = res.data.data;

     
      this.displaycount = this.page;
      this.totalcount = res.data.count;
      this.pagetotal = Math.ceil(res.data.count / 10);
    
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
    this.getJobPosting(this.page);
  }
  Odata(id:any){
    const a = {
      adminStatus: "Approved"
    }
    this.AdminService.updateJobPost(id,a).subscribe((res:any)=>{
      this.getJobPosting(this.page);

    })
  }
  OdataExcuse(id:any){
    const a = {
      adminStatus: "Rejected"
    }
    this.AdminService.updateJobPost(id,a).subscribe((res:any)=>{
      this.getJobPosting(this.page);

    })
  }

}
