import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-job-applicants',
  templateUrl: './view-job-applicants.component.html',
  styleUrls: ['./view-job-applicants.component.css']
})
export class ViewJobApplicantsComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  id:any
  ngOnInit(): void {
    this.route.queryParams.subscribe((res:any)=>{
      this.id = res.id
      console.log(this.id,"id")
      this.getViewApplicantsDeatils(this.id)
    })
    this.getViewApplicantsDeatils(this.id)
  }
  data:any
  getViewApplicantsDeatils(id:any){
    this.registrationService.ViewMyJobApplicantsMyJobs(id).subscribe((res:any)=>{
      this.data = res.user
      console.log(this.data,"this.data")
    })

  }
  history(id:any){

  }

}
