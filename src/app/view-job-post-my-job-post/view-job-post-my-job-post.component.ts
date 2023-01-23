import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-job-post-my-job-post',
  templateUrl: './view-job-post-my-job-post.component.html',
  styleUrls: ['./view-job-post-my-job-post.component.css']
})
export class ViewJobPostMyJobPostComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  id:any
  ngOnInit(): void {
    this.route.queryParams.subscribe((res:any)=>{
      this.id = res.id
      console.log(this.id,"id")
      this.getDetailsViewJobPostSDertailsById(this.id)
    })
    this.getDetailsViewJobPostSDertailsById(this.id)

  }
  employeedata:any
  getDetailsViewJobPostSDertailsById(id:any){
 this.registrationService.getJobPostDataById(this.id).subscribe((res:any)=>{
  this.employeedata = res.user[0]
  console.log(this.employeedata,"bfdwejfseb")
 })
  }

}
