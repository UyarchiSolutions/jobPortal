import { Injectable } from '@angular/core';
import { Env } from '../environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseurl = Env.baseAPi;

  constructor(private http: HttpClient) { }
// submit candidate Details
  submitcandicate(data:any){
     return this.http.post(this.baseurl+ '/v1/candidateRegistration/register',data)
  }
  // loginCandidate
  loginForm(data:any){
    return this.http.post(this.baseurl+ '/v1/candidateRegistration/login',data)

  }
  // verify_otp candidate

  verify_otp(data:any){
    // let local: any = localStorage.getItem('tokendata');
    // let token: any = JSON.parse(local).valuedata;
    // console.log(local,"local")
    // console.log(token,"token")
    return this.http.post(this.baseurl+ '/v1/candidateRegistration/mobile_verify_Otp',data)
  }

  ForgotPassApi(data:any){
       return this.http.post(this.baseurl+'/v1/candidateRegistration/forget_password',data)
  }

  // change password

  changePassword(id:any,data:any){
    return this.http.post(this.baseurl+'/v1/candidateRegistration/forget_password_set/'+id,data)
  }

  // forgotVerifyOpt

  forgotVerifyOpt(data:any){ 
    return this.http.post(this.baseurl+'/v1/candidateRegistration/forget_password_Otp',data)
  }
  // employeeRegister
  employeeRegister(data:any){
    return this.http.post(this.baseurl+'/v1/employerRegistration/register',data)
  }

  // employeVeriFyPassword
  employeVeriFyPassword(data:any){
    return this.http.post(this.baseurl+'/v1/employerRegistration/mobile_verify_Otp',data)
  }
// submitAdvanceCandidateDetails
      submitAdvanceCandidateDetails(data:any){
        let local: any = localStorage.getItem('tokenloginCandidate');
        // let token: any = JSON.parse(local).valuedata;
        // console.log(token,"fBJKFSDFHFBSFJFBSFJ");
        return this.http.post(this.baseurl+ '/v1/candidateDetail/createKeyskill',data,{
          headers: { auth: local },
        })

    }
  // loginFormEmployee
  loginFormEmployee(data:any){
    return this.http.post(this.baseurl+'/v1/employerRegistration/login',data)
  }
  // ForgotPassEmployeeApi

  ForgotPassEmployeeApi(data:any){
    return this.http.post(this.baseurl+'/v1/employerRegistration/forget_password',data)
  }
  // employeeForgotVeriOTP
  employeeForgotVeriOTP(data:any){
    return this.http.post(this.baseurl+'/v1/employerRegistration/forget_password_Otp',data)
  }
  // EmployeeSetPassword

  EmployeeSetPassword(id:any,data:any){
    return this.http.post(this.baseurl+'/v1/employerRegistration/forget_password_set/'+id,data)
  }
  // submitPostAJob
  submitPostAJob(data:any){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
      
        console.log(local,"fBJKFSDFHFBSFJFBSFJ");
   
    console.log(local,"sdfggfhfhgj")
    return this.http.post(this.baseurl+'/v1/employerdetail/createEmpDetails',data,{
      headers: { auth: local },
    })
  }

  // getCandidateData
  getcandidateData(){
    let local: any = localStorage.getItem('tokenloginCandidate');
    console.log(local,"local")
    return this.http.get(this.baseurl + '/v1/candidateDetail/getKeyskill',{
      headers: { auth: local },
    })
  } 

  // candidateUpdateData
  candidateUpdateData(data:any){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.put(this.baseurl+'/v1/candidateDetail/updateKeyskill/',data,{
      headers: { auth: local },
    })
    
  }

  // 
  searchcandicate(data:any){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.post(this.baseurl+'/v1/employerCandidateSearch',data,{
      headers : { auth: local },
    })
  }

  candidateSearchWithoutSave(keyskill:any){

    // let params = new HttpParams();
    // const array = keyskill;
    // params.append('keyskill', JSON.stringify(array);

    return this.http.post(this.baseurl+'/v1/employerCandidateSearch/searchQuery',keyskill)
  }

  // getdataAdvanceEmployeeDetails

  getdataAdvanceEmployeeDetails(){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.get(this.baseurl+ '/v1/employerdetail/getEmpDetails',{
      headers: { auth: local}
    })
  }

  // employeeUpdateData

  employeeUpdateData(id:any,data:any){
    return this.http.put(this.baseurl+ '/v1/employerdetail/updateEmpDetails/'+id,data)
  }

  // getdetatilsPostedJob

  getdetatilsPostedJob(data:any){
    return this.http.post(this.baseurl+'/v1/candidateDetail/candidateSearch',data)
  }

  // getpostedDetailsCandidateSearch

  getpostedDetailsCandidateSearch(id:any){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.get(this.baseurl+'/v1/candidateDetail/getByIdEmployerDetailsShownCandidate/'+id,{
      headers: { auth: local}
    })
  }

  AppliedJobDisplay(){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.get(this.baseurl+'/v1/candidateDetail/getByIdAppliedJobs',{
      headers: { auth: local}
    })
  }
  // displayApplierJobData

  displayApplierJobData(id:any){
    return this.http.get(this.baseurl+'/v1/candidateDetail/applyJobsView/'+id)
  }

  getdataSavedJobDisplayData(id:any){
    return this.http.get(this.baseurl+'/v1/candidateDetail/getByIdSavedJobsView/'+id)
  }

  applieyJob(data:any){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.post(this.baseurl+'/v1/candidateDetail/createCandidatePostjob',data,{
      headers: { auth: local}
      })

  }
  saveJobData(data:any){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.post(this.baseurl+'/v1/candidateDetail/createCandidateSavejob',data,{
      headers: { auth: local}
      });
  }

  // getsavedJobs
  getdataSavedJob(){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.get(this.baseurl+'/v1/candidateDetail/getByIdSavedJobs',{
      headers: { auth: local}
    });
  }

  // ViewJobAlert

  JobAlertView(){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.get(this.baseurl+'/v1/candidateDetail/SearchByIdcandidataSearchEmployerSet',{
      headers: { auth: local}
    })
  }
// child
  ViewJobAlert(id:any){
    return this.http.get(this.baseurl+'/v1/candidateDetail/applyJobsView/'+id)
  }
  // getCandidateDetailsafterSearch
  getCandidateDetailsafterSearch(id:any){
    return this.http.get(this.baseurl+'/v1/employerCandidateSearch/employerSearchCandidate/'+id)
  }
  // searchDetails
  searchDetails(data:any){
    return this.http.post(this.baseurl+'/v1/employerCandidateSearch/searchQuery',data)
  }

  // folderSubmit

  folderSubmit(data:any){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.post(this.baseurl+'/v1/employerCandidateSearch/createSavetoFolder',data,{
      headers : { auth: local}
    })
  }

  // myjobPost(){
  //   let local: any = localStorage.getItem('tokenloginEmplooyeee');
  //   return this.http.get(this.baseurl+'/v1/employerCandidateSearch/employerPost_Jobs',{
  //     headers : { auth: local}
  //   })
  // }

   myjobPost(){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.get(this.baseurl+'/v1/employerdetail/getEmpDetails',{
      headers : { auth: local}
    })
  }
  // ViewMyJobApplicantsMyJobs
  ViewMyJobApplicantsMyJobs(id:any){
    return this.http.get(this.baseurl+ '/v1/employerCandidateSearch/candidate_applied_Details/'+id)
  }
  // ViewCandidateDetailsByEmploye

  ViewCandidateDetailsByEmploye(id:any){
       return this.http.get(this.baseurl+'/v1/employerCandidateSearch/candidate_applied_Details_view/'+id)
  }

  // folderNameGet

  folderNameGet(){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.get(this.baseurl+'/v1/employerCandidateSearch/allFolderData',{
      headers: { auth: local}
    })
  }
  // viewBasicDetailsCandidate

  viewBasicDetailsCandidate(){
    let local: any = localStorage.getItem('tokenloginCandidate');
    return this.http.get(this.baseurl+'/v1/candidateDetail/getKeyskill',{
      headers: { auth: local}
    })
  }

  // viewBasicDetailsEmployee
  viewBasicDetailsEmployee(){
    let local: any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.get(this.baseurl+'/v1/employerRegistration/userDetails',{
      headers: { auth: local}
    })
  }

  // savedSearchData

  savedSearchData(){
    let local : any = localStorage.getItem('tokenloginEmplooyeee');
    return this.http.get(this.baseurl+'/v1/employerCandidateSearch/saveSearchData_EmployerSide',{
      headers: { auth: local}
    })
  }

  // removeSearch

  removeSearch(id:any){
    return this.http.delete(this.baseurl+'/v1/employerCandidateSearch/candidatdeSaveJobRemove/'+id)
  }
  createJobAlert(data:any){
  //   let local: any = localStorage.getItem('tokenloginCandidate');
  //   return this.http.post(this.baseurl+'/v1/candidateDetail/createSetSearchEmployerData',data,{
  //     headers: { auth: local}
  //   })
  // }
  let local: any = localStorage.getItem('tokenloginCandidate');
  return this.http.put(this.baseurl+'/v1/candidateDetail/updateKeyskill',data,{
        headers: { auth: local}
      })
}

// disablePost
disablePost(id:any){
  return this.http.delete(this.baseurl+ '/v1/employerdetail/deleteEmpDetails/'+id)
}
// RepostDataJobPost
RepostDataJobPost(id:any,data:any){
  return this.http.put(this.baseurl+'/v1/employerdetail/createEmpDetailsRepost/'+id,data)

}
getdataForRepost(id:any){
  return this.http.get(this.baseurl+'/v1/employerdetail/createEmpDetailsRepost/'+id)
}
getJobPostDataById(id:any){
  return this.http.get(this.baseurl+'/v1/employerdetail/getByIdEmpDetails/'+id)
}
getAddress(lat:any,lan: any){
  const a = {
    lat : lat,
    long : lan
  }
  const queryString =new URLSearchParams(a).toString()
  return this.http.get(this.baseurl+`/v1/candidateRegistration/getMap/Location?`+queryString)
}
manageViewMyJobPOstUsed(id:any){
  return this.http.get(this.baseurl + '/v1/employerDetail/data_Id/'+id)
}
verifyMobile(data:any){
  return this.http.post(this.baseurl+'/v1/candidateRegistration/mobile_verify',data)
}
verifyEmployeeMobile(data:any){
  return this.http.post(this.baseurl+'/v1/employerRegistration/mobile_verify',data)
}
// cv access

CvCountUpdate(id:any,data:any){
  let local: any = localStorage.getItem('tokenloginEmplooyeee');
  return this.http.put(this.baseurl+'/v1/planPayment/cvCount/'+id,data,{
    headers: { auth: local}
  })
}
getCvDataView(){
  let local: any = localStorage.getItem('tokenloginEmplooyeee');
  return this.http.get(this.baseurl+'/v1/planPayment/cvdata',{
    headers: { auth: local}
  })
}

jobalertJobpoStDeatils(id:any){
  return this.http.get(this.baseurl+'/v1/candidateDetail/getByIdEmployerDetails/'+id)
}
geterrorplan(){
  let local: any = localStorage.getItem('tokenloginEmplooyeee');
  return this.http.get(this.baseurl+'/v1/employerdetail/countPostjobError',{
    headers: { auth: local}
  })
}
getjoballdata(data:any){
  let local: any = localStorage.getItem('tokenloginCandidate');
  return this.http.post(this.baseurl+'/v1/candidateDetail/candidateSearch_front_page',data,{
    headers: { auth: local}
  })
}
savecandidateAfterSearch(data:any){
  let local: any = localStorage.getItem('tokenloginEmplooyeee');
  return this.http.post(this.baseurl+'/v1/employerCandidateSearch/createSaveSeprate',data,{
    headers: { auth: local }
  })
}
}
