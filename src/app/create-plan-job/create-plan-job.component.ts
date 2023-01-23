import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-create-plan-job',
  templateUrl: './create-plan-job.component.html',
  styleUrls: ['./create-plan-job.component.css']
})
export class CreatePlanJobComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  craetePlanForm:any;
  formsubmited= false;
  ngOnInit(): void {
    this.craetePlanForm = new FormGroup({
      planName: new FormControl('',Validators.required),
      jobPost: new FormControl('', Validators.required),
      cvAccess: new FormControl('',Validators.required),
      numberOfMassMailer: new FormControl('',Validators.required),
      cost: new FormControl('',Validators.required),
      offer: new FormControl('',Validators.required),
      validityOfPlan: new FormControl('',Validators.required),
      jobPostVAlidity: new FormControl('',Validators.required),

    })
  }

  submit(){
    this.formsubmited = true;
    if(this.craetePlanForm.valid)
 
    this.AdminService.createJobPlan(this.craetePlanForm.value).subscribe((res:any)=>{
      console.log(this.craetePlanForm.value,"this.craetePlanForm.value");
      this.craetePlanForm.reset()
      this.router.navigate(['ManagePlanView'])
    })
  }
  value:any
  selectvalue(e:any){
   this.value = e.target.value
   console.log(this.value,"dmasjlkdmskdm")

  }

}
