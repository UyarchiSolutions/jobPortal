import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0;
  getdata:any
  ngOnInit(): void {

    this.getAppliedJob()
  }
  appliedJob:any
  getAppliedJob(){
    this.registrationService.AppliedJobDisplay().subscribe((res:any)=>{
      this.getdata = res
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
   
  }
}
