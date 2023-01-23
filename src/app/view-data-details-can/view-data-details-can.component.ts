import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-data-details-can',
  templateUrl: './view-data-details-can.component.html',
  styleUrls: ['./view-data-details-can.component.css']
})
export class ViewDataDetailsCanComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  baseurl = Env.baseAPi;
  ngOnInit(): void {
    this.getdisplayData();
  }
  data:any
  getdisplayData(){
    this.registrationService.getcandidateData().subscribe((res:any)=>{
      this.data = res.user[0];
      console.log(this.data,"this.data")
    })
  }

}
