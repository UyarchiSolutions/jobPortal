import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-viewpost-after-used-job-post',
  templateUrl: './viewpost-after-used-job-post.component.html',
  styleUrls: ['./viewpost-after-used-job-post.component.css']
})
export class ViewpostAfterUsedJobPostComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      console.log(this.id, 'jjjjjjjjjj');
      this.PostJobDetails(this.id);
    });

  }
  id:any
  getDetail:any
  PostJobDetails(id:any){
    this.registrationService.manageViewMyJobPOstUsed(id).subscribe((res:any)=>{
      this.getDetail = res
      console.log(this.getDetail,"this.getDetail")
    })

  }

}
