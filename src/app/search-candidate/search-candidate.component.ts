import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.css']
})
export class SearchCandidateComponent implements OnInit {

  searchForm:any
  constructor(public registrationService: RegistrationService, private router: Router) { }
  keyskill:any = [];

  // mystring = this.keyskill
  // myArray = this.mystring.split(',');

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      keyskill: new FormControl([]),
      anyKeywords: new FormControl([]),
      experienceMonthFrom : new FormControl(''),
      experienceMonthTo: new FormControl(''),
      salaryFrom: new FormControl(''),
      salaryTo : new FormControl(''),
      locationCurrent: new FormControl(''),
      EducationalType: new FormControl(''),
      university: new FormControl(''),
      courseType : new FormControl(''),
      passingYearFrom : new FormControl(''),
      passingYearTo : new FormControl(''),
      specification : new FormControl(''),

    })
  }
  selectvaluedata:any
  selectvalue(e:any){
    this.selectvaluedata =  e.target.value;
    console.log(this.selectvaluedata,"this.selectvaluedata")
  }

  Search(){

    // this.registrationService.candidateSearchWithoutSave(this.searchForm.value).subscribe((res:any)=>{
      this.router.navigate(['/searchCandidate/DisplaySearchDetails'],{queryParams:{data:JSON.stringify(this.searchForm.value)}})
       
    // })
  }
  submit(){
    // if(this.searchForm.valid)
    this.registrationService.searchcandicate(this.searchForm.value).subscribe((res:any)=>{
      console.log(this.searchForm.value,"this.searchForm.value")

    })
  }

  keyupdata(event:any,key:any){
    if (key == 'keyskill') {
      this.searchForm.patchValue({
        keyskill: event.target.value.split(','),
      });
      console.log(this.searchForm.value,"this.searchForm.value")
    }
    }
  

}
