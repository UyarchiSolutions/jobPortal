import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-re-post-my-job-post',
  templateUrl: './re-post-my-job-post.component.html',
  styleUrls: ['./re-post-my-job-post.component.css']
})
export class RePostMyJobPostComponent implements OnInit {

  constructor(public http: HttpClient,public registrationService : RegistrationService, private router: Router,public route: ActivatedRoute) { }

  EditpostJob:any
  baseurl = Env.baseAPi;
  datadata:any;
  id:any
  iid:any
  local: any = localStorage.getItem('tokenloginEmplooyeee');

  ngOnInit(): void {

    this.route.queryParams.subscribe((res: any) => {
      this.iid = res.id;
     
      console.log(this.iid, 'jjjjjjjjjj');
     
    });

   
    this.EditpostJob = new FormGroup({
      jobTittle: new FormControl(''),
      designation: new FormControl(''),
      recruiterName: new FormControl(''),
      contactNumber: new FormControl(''),
      jobDescription: new FormControl(''),
      keySkill: new FormControl(''),
      salaryRangeFrom: new FormControl(''),
      salaryRangeTo: new FormControl(''),
      experienceFrom: new FormControl(''),
      experienceTo: new FormControl(''),
      interviewType: new FormControl(''),
      candidateDescription: new FormControl(''),
      workplaceType: new FormControl(''),
      industry: new FormControl(''),
      preferredindustry: new FormControl(''),
      functionalArea: new FormControl(''),
      role: new FormControl(''),
      jobLocation: new FormControl(''),
      employmentType: new FormControl(''),
      openings: new FormControl(''),
      educationalQualification: new FormControl(''),
      // validity: new FormControl('')
    });

    
    this.http.get(this.baseurl+ '/v1/employerdetail/getByIdEmpDetails/' +this.iid,{
     
    }).subscribe((res: any) => {
      this.datadata = res.user
      this.id = this.datadata._id

      console.log(this.datadata,"FLKHFJKWFBHNEJK")
     
      
      this.EditpostJob.patchValue({
        jobTittle : this.datadata[0].jobTittle,
      designation: this.datadata[0].designation,
      recruiterName: this.datadata[0].recruiterName,
      contactNumber: this.datadata[0].contactNumber,
      jobDescription: this.datadata[0].jobDescription,
      keySkill: this.datadata[0].keySkill,
      salaryRangeFrom: this.datadata[0].salaryRangeFrom,
      salaryRangeTo:this.datadata[0].salaryRangeTo,
      experienceFrom: this.datadata[0].experienceFrom,
      experienceTo: this.datadata[0].experienceTo,
      interviewType: this.datadata[0].interviewType,
      candidateDescription: this.datadata[0].candidateDescription,
      workplaceType: this.datadata[0].workplaceType,
      industry: this.datadata[0].industry,
      preferredindustry: this.datadata[0].preferredindustry,
      functionalArea: this.datadata[0].functionalArea,
      role: this.datadata[0].role,
      jobLocation: this.datadata[0].jobLocation,
      employmentType: this.datadata[0].employmentType,
      openings: this.datadata[0].openings,
      educationalQualification: this.datadata[0].educationalQualification,
      // validity : this.datadata[0].validity
      });
    });
  }

  submit(){
    
    this.registrationService.RepostDataJobPost(this.iid,this.EditpostJob.value).subscribe((res:any)=>{
      console.log(this.EditpostJob.value,"this.AdvanceCandidateform.value")
      this.router.navigate(['/MyJobPost'])
    })
  }
  valuedata: any;
  selectvalue(e: any) {
    this.valuedata = e.target.value;
    console.log(this.valuedata, 'this.value');
  }

  data:any
getdata(id:any){
  this.registrationService.getdataForRepost(this.id).subscribe((res:any)=>{
    this.data = res.user
  })

}


}
