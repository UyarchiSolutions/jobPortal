import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0;
  getdata:any;

  ngOnInit(): void {
    this.getsaveddata()
  }

  getsaveddata(){
    this.registrationService.getdataSavedJob().subscribe((res:any)=>{
      this.getdata = res
      console.log(this.getdata,"this.getdata")
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
