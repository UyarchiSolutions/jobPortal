import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-candidate-display-search-job',
  templateUrl: './candidate-display-search-job.component.html',
  styleUrls: ['./candidate-display-search-job.component.css']
})
export class CandidateDisplaySearchJobComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  id:any;
  userid:any
  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      this.userid = res.userid
      console.log(this.id, 'jjjjjjjjjj');
      this.getdisplayData(this.id);
    });
  }

  data:any
  getdisplayData(id:any){
    this.registrationService.getpostedDetailsCandidateSearch(this.id).subscribe((res:any)=>{
      this.data = res[0];
      console.log(this.data,"this.data")
    })
  }

  local:any = localStorage.getItem('IDloginCandidate')
  submit(){

    const a = {
      // userId:this.userid ,
      jobId: this.id,
      
    }

    this.registrationService.applieyJob(a).subscribe((res:any)=>{
    console.log(a , "adasdjksfms")
    this.getdisplayData(this.id);
    })


  }

  SaveJob(){
    const a = {
      // userId :this.userid,
      savejobId : this.id
    }
    this.registrationService.saveJobData(a).subscribe((res:any)=>{
      console.log(a,"jskfhsfjsfkj")
      this.getdisplayData(this.id);

    })
  }
}
