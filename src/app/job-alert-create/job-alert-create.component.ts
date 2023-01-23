import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-job-alert-create',
  templateUrl: './job-alert-create.component.html',
  styleUrls: ['./job-alert-create.component.css']
})
export class JobAlertCreateComponent implements OnInit {
  baseurl = Env.baseAPi;
  constructor(public http: HttpClient,public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  
  
  
  JobAlertForm:any;
  datadata:any;
  id:any;
  formsubmited = false
  local:any = localStorage.getItem('tokenloginCandidate')

  ngOnInit(): void {
    this.JobAlertForm = new FormGroup({
      keyskillSet: new FormControl([], Validators.required),
      experienceYeaSet : new FormControl(''),
      experienceMonthSet : new FormControl(''),
      locationSet : new FormControl(''),
    })
    this.http.get(this.baseurl+ '/v1/candidateDetail/getKeyskill',{
      headers: { auth: this.local }
    }).subscribe((res: any) => {
      // this.datadata = res.user[0]._id
      this.datadata = res.user[0].candidateDetails
      this.id = this.datadata[0]._id
      console.log(this.datadata,"WHIWEEEEEE")
     
      this.JobAlertForm.patchValue({
        keyskillSet : this.datadata[0].keyskillSet,
        experienceYeaSet: this.datadata[0].experienceYeaSet,
        experienceMonthSet: this.datadata[0].experienceMonthSet,
        locationSet: this.datadata[0].locationSet,
    
      });
    });

  }

  

  submit(){
    this.formsubmited = true;
    if(this.JobAlertForm.valid)
    
    this.registrationService.createJobAlert(this.JobAlertForm.value).subscribe((res:any)=>{
      console.log(this.JobAlertForm.value,"this.JobAlertForm.value")
      this.JobAlertForm.reset();
      this.router.navigate(['/JobAlertCreate/JobAlert'])
    })
   
  }
  key_skils(event: any, key: any) {
    if (key == 'keyskillSet') {
      this.JobAlertForm.patchValue({
        keyskillSet: event.target.value.split(','),
      });
    }
   
    console.log(this.JobAlertForm.value);
  }

}
