import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-details-employee',
  templateUrl: './view-details-employee.component.html',
  styleUrls: ['./view-details-employee.component.css']
})
export class ViewDetailsEmployeeComponent implements OnInit {

  constructor(public registrationService: RegistrationService,private router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {

this.getemployeeadvanceDEtails();
  }
  employeedata:any
  getemployeeadvanceDEtails(){
    this.registrationService.getdataAdvanceEmployeeDetails().subscribe((res:any)=>{
      this.employeedata = res.user[0];
      console.log(this.employeedata,"this.employeedata")
    })
  }

}
