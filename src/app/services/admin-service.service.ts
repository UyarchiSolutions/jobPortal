import { Injectable } from '@angular/core';
import { Env } from '../environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  baseurl = Env.baseAPi;
  constructor(private http: HttpClient) { }

  submitAdminRegistration(data:any){
    return this.http.post(this.baseurl + '/v1/auth/register',data)
  }
  submitAdminlogin(data:any){
    return this.http.post(this.baseurl + '/v1/auth/login',data)
  }
  employeeRegistrationView(page:any){
    return this.http.get(this.baseurl + '/v1/employerRegistration/employerRegistration/'+page)
  }
  candidateRegistrationView(page:any){
    return this.http.get(this.baseurl + '/v1/candidateDetail/CandidateRegistrations/'+page)
  }

  getJobPostingView(page:any){
    return this.http.get(this.baseurl + '/v1/employerRegistration/employerRegistration_Approved/'+page)
  }

  ApproveStatusUpdate(id:any,data:any){
    return this.http.put(this.baseurl + '/v1/candidateDetail/updateByIdCandidateRegistration/'+id,data)
  }
  updateEmployeeApproved(id:any,data:any){
    return this.http.put(this.baseurl + '/v1/employerRegistration/updateByIdEmployerRegistration/'+id,data)
  }
  updateJobPost(id:any,data:any){
    return this.http.put(this.baseurl + '/v1/employerdetail/updateEmpDetails/'+id,data)
  }

  createJobPlan(data:any){
    let token:any = localStorage.getItem('tokenloginAdmin')
    return this.http.post(this.baseurl+ '/v1/createPlan',data,{
      headers: { auth: token}

    })
  }

  managePlanData(){
    let token:any = localStorage.getItem('tokenloginAdmin')
    return this.http.get(this.baseurl+ '/v1/createPlan/plan_view',{
       headers: { auth:token }
    }
    )
  }
  updateActive(id:any,data:any){
    return this.http.put(this.baseurl+ '/v1/createPlan/plan_view_Update/'+id,data)
  }
  planCreatedByAdminByEmployee(){
    let token :any = localStorage.getItem('tokenloginEmplooyeee')
    return this.http.get(this.baseurl+ '/v1/createPlan/get_All_plans',{
      headers: { auth: token}
    })
  }
  paymentsubmit(data:any){
    let token:any = localStorage.getItem('tokenloginEmplooyeee')
    return this.http.post(this.baseurl+ '/v1/planPayment',data,{
      headers: { auth: token}
    })
  }

  afterPaymentAdminView(){
    return this.http.get(this.baseurl+ '/v1/createPlan/AdminSide_after_Employee_Payment')
  }
  updateActiveTrue(id:any,data:any){
    return this.http.put(this.baseurl+ '/v1/planPayment/Plan_Deactivate/'+id,data)
  }
  updateActiveFalse(id:any,data:any){
    return this.http.put(this.baseurl+ '/v1/planPayment/Plan_Deactivate/'+id,data)
  }
  getManageEmployeePaln(){
    let local:any = localStorage.getItem('tokenloginEmplooyeee')
    return this.http.get(this.baseurl+ '/v1/planPayment/employerPlanHistory',{
      headers: { auth: local}
    })
  }
}
