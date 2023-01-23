import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-add-advance-details-for-candidate',
  templateUrl: './add-advance-details-for-candidate.component.html',
  styleUrls: ['./add-advance-details-for-candidate.component.css']
})
export class AddAdvanceDetailsForCandidateComponent implements OnInit {

  constructor(private fb:FormBuilder,public registrationService : RegistrationService, private router: Router,public http: HttpClient,) { }
  resume: any = '';
  selectImg1:any
  baseurl = Env.baseAPi;

  AdvanceCandidateform:any
  categoryiamge: any;
  formsubmited = false;
  latitude: any;
  longtitude: any;

  local: any = localStorage.getItem('tokenloginCandidate');
  //   console.log(local,"local")
  //   return this.http.get(this.baseurl + '/v1/candidateDetail/getKeyskill',{
  //     headers: { auth: local },
  //   })
  // } 
  ngOnInit(): void {

    this.AdvanceCandidateform = this.fb.group({
      keyskill : new FormControl('', Validators.required),
      experienceMonth: new FormControl('', Validators.required),
      experienceYear: new FormControl('', Validators.required),
      salaryRangeFrom: new FormControl('',Validators.required),
      salaryRangeTo: new FormControl('',Validators.required),
      // locationNative: new FormControl('',Validators.required),
      locationCurrent: new FormControl('',Validators.required),
      education: new FormControl('',Validators.required),
      specification: new FormControl('',Validators.required),
      university: new FormControl('',Validators.required),
      courseType: new FormControl('',Validators.required),
      passingYear: new FormControl('',Validators.required),
      gradingSystem: new FormControl('',Validators.required),
      availability: new FormControl('',Validators.required),
      currentSkill: new FormControl('',Validators.required),
      preferredSkill: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      maritalStatus: new FormControl('',Validators.required),
      image : new FormControl('',[Validators.required]),
      mark: new FormControl('',Validators.required),
      // secondarySkill: new FormControl(),
      // pasrSkill: new FormControl(),

    })

  }

  datadata:any
  // change_image(file: any) {
  //   this.categoryiamge = null
  //   const res = file.target.files[0] as File;
  //   if (res != null) {
  //     if (res.type == 'application/pdf' || res.type == 'application/msword') {
  //       this.categoryiamge = res;
  //       console.log(res, this.categoryiamge, 'aas');
       
  //     }
  //   }

  // }
  fileData: any;
  // selectFile(event: any) {

  //   this.fileData = event.target.files[0];

  //   if (this.fileData.type == 'application/pdf') {
  //   } else {
  //     alert('file type should be of pdf');
  //     return;
  //   }
  // }

  submit(){
    
    this.formsubmited = true;

    var datasubmit = new FormData();
    datasubmit.append('keyskill',this.AdvanceCandidateform.get('keyskill')?.value);
    datasubmit.append('experienceMonth',this.AdvanceCandidateform.get('experienceMonth')?.value);
    datasubmit.append('experienceYear',this.AdvanceCandidateform.get('experienceYear')?.value);
    datasubmit.append('salaryRangeFrom',this.AdvanceCandidateform.get('salaryRangeFrom')?.value);
    datasubmit.append('salaryRangeTo',this.AdvanceCandidateform.get('salaryRangeTo')?.value);
    // datasubmit.append('locationNative',this.AdvanceCandidateform.get('locationNative')?.value);
    datasubmit.append('locationCurrent',this.AdvanceCandidateform.get('locationCurrent')?.value);
    datasubmit.append('education',this.AdvanceCandidateform.get('education')?.value)
    datasubmit.append('specification',this.AdvanceCandidateform.get('specification')?.value)
    datasubmit.append('university',this.AdvanceCandidateform.get('university')?.value)
    datasubmit.append('courseType',this.AdvanceCandidateform.get('courseType')?.value)
    datasubmit.append('passingYear',this.AdvanceCandidateform.get('passingYear')?.value)
    datasubmit.append('gradingSystem',this.AdvanceCandidateform.get('gradingSystem')?.value)
    datasubmit.append('availability',this.AdvanceCandidateform.get('availability')?.value)
    datasubmit.append('currentSkill',this.AdvanceCandidateform.get('currentSkill')?.value)
    datasubmit.append('preferredSkill',this.AdvanceCandidateform.get('preferredSkill')?.value)
    // datasubmit.append('secondarySkill',this.AdvanceCandidateform.get('secondarySkill')?.value)
    // datasubmit.append('pasrSkill',this.AdvanceCandidateform.get('pasrSkill')?.value)
    datasubmit.append('gender',this.AdvanceCandidateform.get('gender')?.value)
    datasubmit.append('maritalStatus',this.AdvanceCandidateform.get('maritalStatus')?.value),
    datasubmit.append('mark',this.AdvanceCandidateform.get('mark')?.value)
    datasubmit.append('image',this.selectImg1);
    if(this.AdvanceCandidateform.valid)
    this.registrationService.submitAdvanceCandidateDetails(datasubmit).subscribe((res:any)=>{
      console.log(datasubmit,"this.AdvanceCandidateform.value");
      this.AdvanceCandidateform.reset();
      this.router.navigate(['ViewBasicCandidate'])

    })
  }
  selectedImg1(event:any){
  
    this.selectImg1=event.target.files[0];
    console.log(this.selectImg1,"this.selectImg1");
  }

  keyupdata(event:any,key:any){
    if (key == 'keyskill') {
      this.AdvanceCandidateform.patchValue({
        keyskill: event.target.value.split(','),
      });
    }
    if (key == 'currentSkill') {
      this.AdvanceCandidateform.patchValue({
        currentSkill: event.target.value.split(','),
      });
    }
    if (key == 'preferredSkill') {
      this.AdvanceCandidateform.patchValue({
        preferredSkill: event.target.value.split(','),
      });
    }
    console.log(this.AdvanceCandidateform.value,"fbhsekifhsefjkhejfhj");
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    this.AdvanceCandidateform.patchValue({
      locationCurrent:address.formatted_address
    })
  }
}