import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-search-candidate-side',
  templateUrl: './search-candidate-side.component.html',
  styleUrls: ['./search-candidate-side.component.css']
})
export class SearchCandidateSideComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router) { }
  displaycount= 0;
  page=0;
  pagetotal= 0;
  totalcount= 0;
  formsubmited = false;
  ngOnInit(): void {
    // this.getpostedJobDetails();

    this.SearchFormCandidate = new FormGroup({
      search: new FormControl([],Validators.required),
      experience: new FormControl(null),
      location: new FormControl(null),
    })
    this.getalljobdata(this.data)
  }
  tableData:any;
  SearchFormCandidate:any
  getpostedJobDetails(){
    // this.SearchFormCandidate.patchValue({
     
    // })
    this.formsubmited = true;
    if(this.SearchFormCandidate.valid)
    this.registrationService.getdetatilsPostedJob(this.SearchFormCandidate.value).subscribe((res:any)=>{
      this.tableData = res.user
      console.log(this.tableData,"this.tableData")
    })

  }
  getjobs:any;
  data:any
  getalljobdata(data:any){
    this.registrationService.getjoballdata(this.data).subscribe((res:any)=>{
      this.tableData = res
      console.log(this.getjobs,"this.getjobs")
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
