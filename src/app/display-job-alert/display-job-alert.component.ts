import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-display-job-alert',
  templateUrl: './display-job-alert.component.html',
  styleUrls: ['./display-job-alert.component.css']
})
export class DisplayJobAlertComponent implements OnInit {


 

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  id:any;
  c_n: any;
  c_t:any;
  designation:any
  expiredDate:any
  experienceFrom:any
  experienceTo:any
  keySkill:any
  openings:any
  jobLocation:any
  jobTittle:any
  workplaceType:any;
  salaryRangeFrom:any;
  salaryRangeTo:any;
  employmentType:any
  mobilenumber:any

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      this.c_n = res.c_n;
      this.c_t = res.c_t;
      // this.keySkill = res.keySkill;
      this.designation  = res.designation;
      this.expiredDate = res.expiredDate;
      this.experienceFrom = res.experienceFrom;
      this.experienceTo = res.experienceTo;
   this.workplaceType = res.workplaceType
      this.openings = res.openings;
      this.jobLocation = res.jobLocation;
      this.jobTittle = res.jobTittle;
      this.mobilenumber = res.mobileNumber;
      this.salaryRangeFrom = res.salaryRangeFrom
      this.salaryRangeTo = res.salaryRangeTo;
      this.employmentType = res.employmentType
      console.log(this.employmentType,"this.employmentType")

      console.log(this.id, 'jjjjjjjjjj');
      console.log(this.c_n, 'jjjjjjjjjj');
      this.getDisplayJobAlert(this.id);
    });
    this.getDisplayJobAlert(this.id)
    this.getjobDetailsJobAlert(this.id)
  }
  data:any
  getDisplayJobAlert(id:any){
    this.registrationService.ViewJobAlert(this.id).subscribe((res:any)=>{
      this.data = res[0]
      console.log()
    })
  }
  jobpostdata:any
  getjobDetailsJobAlert(id:any){
    this.registrationService.jobalertJobpoStDeatils(this.id).subscribe((res:any)=>{
      this.jobpostdata = res
     console.log(this.jobpostdata,"shcdsjfhsdjfsdjfsdj")
    })
  }

}
