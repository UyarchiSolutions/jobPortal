import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-manage-employer-plan-employee-view',
  templateUrl: './manage-employer-plan-employee-view.component.html',
  styleUrls: ['./manage-employer-plan-employee-view.component.css']
})
export class ManageEmployerPlanEmployeeViewComponent implements OnInit {

  constructor(public AdminService : AdminServiceService, private router: Router,public http: HttpClient,) { }

  ngOnInit(): void {
    this.plandatapop();
  }
  plandata:any
  plandatapop(){
    this.AdminService.getManageEmployeePaln().subscribe((res:any)=>{
      this.plandata = res;
      console.log(this.plandata,"plandata");
    })

  }

}
