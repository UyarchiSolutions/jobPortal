import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-basic-employee',
  templateUrl: './view-basic-employee.component.html',
  styleUrls: ['./view-basic-employee.component.css']
})
export class ViewBasicEmployeeComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }
  zoom = 14;
  latitude: any;
  longitude: any;
  ngOnInit(): void {
    this.getBasicDetailsView()
  }
  data:any
  getBasicDetailsView(){
    this.registrationService.viewBasicDetailsEmployee().subscribe((res:any)=>{
      this.data = res.user
      console.log(this.data,"this.data")
    })
  }

  viewMap(lat:any, long:any){
    this.latitude = parseFloat(lat);
    this.longitude = parseFloat(long);
      }
}
