import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-applied-job-display-dta',
  templateUrl: './applied-job-display-dta.component.html',
  styleUrls: ['./applied-job-display-dta.component.css']
})
export class AppliedJobDisplayDtaComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  id:any
  ngOnInit(): void {
    this.getdisplayData(this.id);
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      console.log(this.id, 'jjjjjjjjjj');
      this.getdisplayData(this.id);
    });
  }
  submit(){

  }
  SaveJob(){

    
    
  }
  data:any
  getdisplayData(id:any){
    this.registrationService.displayApplierJobData(this.id).subscribe((res:any)=>{
      this.data = res[0];
      console.log(this.data,"this.data")
    })
  }
}
