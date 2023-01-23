import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Moment } from 'moment';
// import moment from 'moment';
// import * as moment from "moment";
import moment from "moment";
import * as dayjs from 'dayjs';
import { LocaleConfig, LocaleService } from 'ngx-daterangepicker-material';


@Component({
  selector: 'app-post-job-employee',
  templateUrl: './post-job-employee.component.html',
  styleUrls: ['./post-job-employee.component.css'],
  providers: [ LocaleService ]
})
export class PostJobEmployeeComponent implements OnInit {
  postJob: any;
  formsubmited = false;
  moment = moment;
  calendarLocale: LocaleConfig;
  ranges: any;
  calendarPlaceholder: string;
  selectedRange: null | undefined;
  minDate: Moment;
  maxDate: Moment;


 
  constructor(public registrationService: RegistrationService, private router: Router) {
    console.log(this.selectedRange,"selectedRange")
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

  ngOnInit(): void {
    console.log(new Date(1671455047));
    console.log(new Date().getTime());
    this.postJob = new FormGroup({
      jobTittle: new FormControl('',Validators.required),
      designation: new FormControl('',Validators.required),
      recruiterName: new FormControl('',[
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      contactNumber: new FormControl('',Validators.required),
      jobDescription: new FormControl(''),
      keySkill: new FormControl([],Validators.required),
      salaryRangeFrom: new FormControl('',Validators.required),
      salaryRangeTo: new FormControl('',Validators.required),
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
      interviewDate:  new FormControl(''),
      // interviewTime :  new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      location:  new FormControl(''),
      interviewerName :  new FormControl(''),
      interviewerContactNumber:  new FormControl(''),
      // validity: new FormControl('',Validators.required),
      educationalQualification: new FormControl('',Validators.required),
      // mobileNumber: new FormControl('')
    });
 
  }

  key_skils(event: any, key: any) {
    if (key == 'keySkill') {
      this.postJob.patchValue({
        keySkill: event.target.value.split(','),
      });
    }

    console.log(this.postJob.value);
  }
reacharge=false;
approve=false;
 
  submit() {
  
    // console.log(a,"pppppppp")
    this.formsubmited = true;
    if(this.postJob.valid)
    this.registrationService.submitPostAJob(this.postJob.value).subscribe((res: any) => {
      console.log(this.postJob.value, 'this.postJob.value');
      this.router.navigate(['/MyJobPost']);
    },error =>{
console.log(error.error.message,"fgkjjk")
      if(error.error.message == "your not pay the plan"){
        this.reacharge=true;
        this.approve=false;
      }
      else{
        this.reacharge=false;
      this.approve=true;
      }
    });
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
