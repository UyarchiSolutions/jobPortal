import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-job-alert',
  templateUrl: './job-alert.component.html',
  styleUrls: ['./job-alert.component.css']
})
export class JobAlertComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0;

  ngOnInit(): void {
    this.getdataJobAlert()
  }
  jobalert:any

 

  getdataJobAlert(){
    this.registrationService.JobAlertView().subscribe((res:any)=>{
      this.jobalert = res;

      console.log(this.jobalert,"getDisplayJobAlert")
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


