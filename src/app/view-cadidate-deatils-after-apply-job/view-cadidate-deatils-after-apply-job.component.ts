import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-cadidate-deatils-after-apply-job',
  templateUrl: './view-cadidate-deatils-after-apply-job.component.html',
  styleUrls: ['./view-cadidate-deatils-after-apply-job.component.css'],
})
export class ViewCadidateDeatilsAfterApplyJobComponent implements OnInit {
  constructor(public registrationService: RegistrationService, private router: Router, public route: ActivatedRoute) {}

  id: any;
  PaymentDetails: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      console.log(this.id, 'this.id');
      this.getViewCandidateDetailsByEmployey(this.id);
    });
    this.PaymentDetails = new FormGroup({
      Folder: new FormControl('', Validators.required),
      folderName: new FormControl('', Validators.required),
      candidateId: new FormControl('',Validators.required)
    });
    this.getFolderName()
  }
  data: any;
  getViewCandidateDetailsByEmployey(id: any) {
    this.registrationService.ViewCandidateDetailsByEmploye(this.id).subscribe((res: any) => {
      this.data = res.user[0];
      console.log(this.data.currentSkill, 'this.data');
    });
    this.getFolderName()
  }
  parsejson(data: any) {
    console.log(JSON.parse(data));
    return JSON.parse(data);
  }

  ContactEmail(){

  }

  ContactMobile(){

  }

  SaveToFolder(){
    // const a = {
    //   candidateId: this.userId
    // }
    this.PaymentDetails.patchValue({
      candidateId: this.userId
    })
    this.registrationService.folderSubmit(this.PaymentDetails.value).subscribe((res:any)=>{
         console.log(this.PaymentDetails.value,"this.PaymentDetails.value")
    })

  }
  userId:any
  useridGet(userId:any){
    this.userId = userId;
    console.log(this.userId,"this.userId")

  }
  categoryData:any
  getFolderName(){
    this.registrationService.folderNameGet().subscribe((res:any)=>{
      this.categoryData = res.user
      console.log(this.categoryData,"this.categoryData")
    })
  }
  folderNameGet:any
  GetSelectedValue(e:any){
    this.folderNameGet = e.target.value
    console.log(this.folderNameGet,"this.folder")

  }
}
