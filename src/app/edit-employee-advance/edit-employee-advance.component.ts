import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';
import { Moment } from 'moment';
// import moment from 'moment';
// import * as moment from "moment";
import moment from "moment";
import * as dayjs from 'dayjs';
import { LocaleConfig, LocaleService } from 'ngx-daterangepicker-material';
@Component({
  selector: 'app-edit-employee-advance',
  templateUrl: './edit-employee-advance.component.html',
  styleUrls: ['./edit-employee-advance.component.css']
})
export class EditEmployeeAdvanceComponent implements OnInit {
 

  constructor(public http: HttpClient,public registrationService : RegistrationService, private router: Router,) { 

    this.calendarLocale = {
      customRangeLabel: 'Pick a date...',
      applyLabel: 'Apply',
      clearLabel: 'Clear',
      format: 'DD/MM/YYYY',
      daysOfWeek: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      firstDay: 1
    };
  
    this.ranges = {
      'Current day': [moment(), moment()],
      'Current week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
      'Next 2 days': [moment().add(1, 'days'), moment().add(2, 'days')],
      'Next 3 days': [moment().add(1, 'days'), moment().add(3, 'days')],
      'Next weekend': [this.getNextSaturday(), this.getNextSunday()]
    };
  
    this.calendarPlaceholder = 'All';
  
    this.minDate = moment();
    this.maxDate = moment().clone().add(10, 'years');
  
    }
  
  
    EditpostJob:any
    baseurl = Env.baseAPi;
    datadata:any;
    id:any;
    formsubmited= false;
    moment = moment;
    calendarLocale: LocaleConfig;
    ranges: any;
    calendarPlaceholder: string;
    selectedRange: null | undefined;
    minDate: Moment;
    maxDate: Moment;
  
    local: any = localStorage.getItem('tokenloginEmplooyeee');
  
    ngOnInit(): void {
  
      console.log(new Date(1671455047));
      console.log(new Date().getTime());
      this.EditpostJob = new FormGroup({
        jobTittle: new FormControl('',Validators.required),
        designation: new FormControl('',Validators.required),
        recruiterName: new FormControl('',Validators.required),
        contactNumber: new FormControl('',Validators.required),
        jobDescription: new FormControl(''),
        keySkill: new FormControl('',Validators.required),
        salaryRangeFrom: new FormControl(''),
        salaryRangeTo: new FormControl(''),
        experienceFrom: new FormControl('',Validators.required),
        experienceTo: new FormControl('',Validators.required),
        interviewType: new FormControl('',Validators.required),
        candidateDescription: new FormControl(''),
        workplaceType: new FormControl(''),
        industry: new FormControl(''),
        preferredindustry: new FormControl(''),
        functionalArea: new FormControl(''),
        role: new FormControl(''),
        jobLocation: new FormControl('',Validators.required),
        employmentType: new FormControl(''),
        openings: new FormControl('',Validators.required),
        educationalQualification: new FormControl('',Validators.required),
       
        interviewDate:  new FormControl('',),
        interviewTime :  new FormControl('',),
        location:  new FormControl('',),
        interviewerName :  new FormControl('',),
        interviewerContactNumber:  new FormControl('',),
        startTime: new FormControl(''),
        endTime: new FormControl(''),
      });
  
      
      this.http.get(this.baseurl+ '/v1/employerdetail/getEmpDetails',{
        headers: { auth: this.local }
      }).subscribe((res: any) => {
        this.datadata = res.user
        this.id = this.datadata[0]._id
       
        console.log(res, 'response');
        console.log(this.datadata[0].jobTittle,"this.datadata.candidateDetails.experienceMonth")
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
       
        interviewDate: this.datadata[0].interviewDate,
        interviewTime :  this.datadata[0].interviewTime,
        location:  this.datadata[0].location,
        interviewerName :  this.datadata[0].interviewerName,
        interviewerContactNumber:  this.datadata[0].interviewerContactNumber,
        startTime:this.datadata[0].startTime,
        endTime: this.datadata[0].endTime,
        });
      });
    }
  
    submit(){
      console.log(this.EditpostJob.valid,"this.AdvanceCandidateform.value")
      console.log(this.id,"this.id")
      this.formsubmited = true;
   
      this.registrationService.employeeUpdateData(this.id,this.EditpostJob.value).subscribe((res:any)=>{
        console.log(this.EditpostJob.value,"this.AdvanceCandidateform.value")
        this.router.navigate(['/MyJobPost'])
      })
    }
    valuedata: any;
    selectvalue(e: any) {
      this.valuedata = e.target.value;
      console.log(this.valuedata, 'this.value');
    }
  
      // date range
  
      private getNextSaturday() {
        const dayINeed = 6; // for Saturday
        const today = moment().isoWeekday();
        if (today <= dayINeed) {
          return moment().isoWeekday(dayINeed);
        } else {
          return moment().add(1, 'weeks').isoWeekday(dayINeed);
        }
      }
    
      private getNextSunday() {
        const dayINeed = 7; // for Sunday
        const today = moment().isoWeekday();
        if (today <= dayINeed) {
          return moment().isoWeekday(dayINeed);
        } else {
          return moment().add(1, 'weeks').isoWeekday(dayINeed);
        }
      }
  
  }
  