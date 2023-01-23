import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-saved-job-display-data',
  templateUrl: './saved-job-display-data.component.html',
  styleUrls: ['./saved-job-display-data.component.css']
})
export class SavedJobDisplayDataComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  id:any;
  savedId:any
  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      this.savedId = res._id
      console.log(this.savedId,)
      console.log(this.id, 'jjjjjjjjjj');
      this.getdisplayData(this.id);
    });
  }

  data:any
  getdisplayData(id:any){
    this.registrationService.getdataSavedJobDisplayData(this.id).subscribe((res:any)=>{
      this.data = res[0];
      console.log(this.data,"this.data")
    })
  }
  local:any = localStorage.getItem('IDloginCandidate')
  submit(){
    const a = {
    
      jobId: this.id
    }

    this.registrationService.applieyJob(a).subscribe((res:any)=>{
    console.log(a , "adasdjksfms")
    })

  }

  RemoveJob(){
    this.registrationService.removeSearch(this.savedId).subscribe((res:any)=>{
      console.log(this.savedId,"bdjsdfsnsmbnsdbn")
      
    })
  }

}
