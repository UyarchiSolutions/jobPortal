import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-my-job-post',
  templateUrl: './my-job-post.component.html',
  styleUrls: ['./my-job-post.component.css']
})
export class MyJobPostComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getmyjobpost();


    this.registrationService.geterrorplan().subscribe((res:any)=>{

    },error =>{
      console.log(error.error.message,"fgkjjk")
            if(error.error.message == "your not pay the plan"){
              this.reacharge=true;
              this.approve=false;
              this.usedexpires = false;
              this.validity = false
            }
            if(error.error.message == "Employer Not Approved"){
              this.reacharge=false;
              this.approve=true;
              this.usedexpires = false;
              this.validity = false
            }if(error.error.message == "jobpost limit over..."){
              this.reacharge=false;
              this.approve=false;
              this.usedexpires = true;
              this.validity = false
            }if(error.error.message == "your free post over.."){
              this.reacharge=false;
              this.approve=false;
              this.usedexpires = false;
              this.validity = false;
              this.free = true
            }
            // else{
            //   this.reacharge=false;
            //   this.approve=false;
            //   this.usedexpires = false;
            //   this.validity = true
            // }
          });
          
  }
  free:any
  getDetail:any;
  reacharge:any;
  approve:any;
  usedexpires:any;
  validity:any
  getCheckedData(e:any,data:any,id:any){

  }

  history(id:any){

  }
  getmyjobpost(){

    this.registrationService.myjobPost().subscribe((res:any)=>{
      this.getDetail = res.user
      console.log(this.getDetail,"success")
    })
  }

  OdatEdit(id:any){

  }
  OdataDisable(id:any){
    console.log('OdatDisable')
    this.registrationService.disablePost(id).subscribe((res:any)=>{
      window.location.reload();
    })

  }

  OdataRepost(id:any){
    // this.registrationService.rePost(id,).subscribe((res:any)=>{
    //   console.log("skssjdb")
    // })
  }
  OdataRefresh(id:any){

  }



}
