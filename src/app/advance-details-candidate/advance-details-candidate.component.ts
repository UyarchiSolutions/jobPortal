import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-advance-details-candidate',
  templateUrl: './advance-details-candidate.component.html',
  styleUrls: ['./advance-details-candidate.component.css'],
})
export class AdvanceDetailsCandidateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public registrationService: RegistrationService,
    private router: Router,
    public http: HttpClient
  ) {}
  resume: any = '';
  selectImg1: any;
  baseurl = Env.baseAPi;
formSubmitted = false;
  AdvanceCandidateform: any;
  categoryiamge: any;
  id: any;
 



  local: any = localStorage.getItem('tokenloginCandidate');
  idData: any = localStorage.getItem('IDloginCandidate');
  image:any;

  ngOnInit(): void {
    this.AdvanceCandidateform = this.fb.group({
      keyskill: new FormControl('', Validators.required),
      experienceMonth: new FormControl(null),
      experienceYear: new FormControl(null),
      salaryRangeFrom: new FormControl('', Validators.required),
      salaryRangeTo: new FormControl('', Validators.required),
      // locationNative: new FormControl('', Validators.required),
      locationCurrent: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      specification: new FormControl('', Validators.required),
      university: new FormControl('', Validators.required),
      courseType: new FormControl('', Validators.required),
      passingYear: new FormControl('', Validators.required),
      gradingSystem: new FormControl('', Validators.required),
      availability: new FormControl('', Validators.required),
      currentSkill: new FormControl('', Validators.required),
      preferredSkill: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      mark: new FormControl('', Validators.required),
    
    });

    this.http
      .get(this.baseurl + '/v1/candidateDetail/getKeyskill', {
        headers: { auth: this.local },
      })
      .subscribe((res: any) => {
        this.datadata = res.user;
        this.id = this.datadata[0].candidateDetails[0]._id;
        console.log(this.id, 'this.id ');
        console.log(this.datadata[0].candidateDetails[0].keyskill,"values")

        this.AdvanceCandidateform.patchValue({
          keyskill: this.datadata[0].candidateDetails[0].keyskill,
          experienceMonth: this.datadata[0].candidateDetails[0].experienceMonth,
          experienceYear: this.datadata[0].candidateDetails[0].experienceYear,
          salaryRangeFrom: this.datadata[0].candidateDetails[0].salaryRangeFrom,
          salaryRangeTo: this.datadata[0].candidateDetails[0].salaryRangeTo,
          // locationNative: this.datadata[0].candidateDetails[0].locationNative,
          locationCurrent: this.datadata[0].candidateDetails[0].locationCurrent,
          education: this.datadata[0].candidateDetails[0].education,
          specification: this.datadata[0].candidateDetails[0].specification,
          university: this.datadata[0].candidateDetails[0].university,
          courseType: this.datadata[0].candidateDetails[0].courseType,
          passingYear: this.datadata[0].candidateDetails[0].passingYear,
          gradingSystem: this.datadata[0].candidateDetails[0].gradingSystem,
          mark: this.datadata[0].candidateDetails[0].mark,
          availability: this.datadata[0].candidateDetails[0].availability,
          currentSkill: this.datadata[0].candidateDetails[0].currentSkill,
          preferredSkill: this.datadata[0].candidateDetails[0].preferredSkill,
          gender: this.datadata[0].candidateDetails[0].gender,
          maritalStatus: this.datadata[0].candidateDetails[0].maritalStatus,
        
        
        })
        // this.selectImg1=this.datadata[0].candidateDetails[0].image
        this.expyear=this.AdvanceCandidateform.get('experienceYear')?.value;
        this.expMonth=this.AdvanceCandidateform.get('experienceMonth')?.value;
        if (this.datadata[0].candidateDetails[0].image != "" && this.datadata[0].candidateDetails[0].image != "undefined" &&this.datadata[0].candidateDetails[0].image != null) {
          this.image = this.baseurl + "/" +this.datadata[0].candidateDetails[0].image;
        }
      });
  }
  key_skils(event: any, key: any) {
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
    console.log(this.AdvanceCandidateform.value);
  }
  datadata: any=[];
  change_image(file: any) {
    this.categoryiamge = null;
    const res = file.target.files[0] as File;
    if (res != null) {
      if (res.type == 'application/pdf' || res.type == 'application/msword') {
        this.categoryiamge = res;
        console.log(res, this.categoryiamge, 'aas');
      }
    }
  }
  fileData: any;
  selectFile(event: any) {
    this.fileData = event.target.files[0];

    if (this.fileData.type == 'application/pdf') {
    } else {
      alert('file type should be of pdf');
      return;
    }
  }

  submit() {
    var datasubmit = new FormData();
    datasubmit.append('experienceMonth', this.AdvanceCandidateform.get('experienceMonth')?.value);
    datasubmit.append('experienceYear', this.AdvanceCandidateform.get('experienceYear')?.value);
    datasubmit.append('salaryRangeFrom', this.AdvanceCandidateform.get('salaryRangeFrom')?.value);
    datasubmit.append('salaryRangeTo', this.AdvanceCandidateform.get('salaryRangeTo')?.value);
    datasubmit.append('locationNative', this.AdvanceCandidateform.get('locationNative')?.value);
    datasubmit.append('locationCurrent', this.AdvanceCandidateform.get('locationCurrent')?.value);
    datasubmit.append('education', this.AdvanceCandidateform.get('education')?.value);
    datasubmit.append('specification', this.AdvanceCandidateform.get('specification')?.value);
    datasubmit.append('university', this.AdvanceCandidateform.get('university')?.value);
    datasubmit.append('courseType', this.AdvanceCandidateform.get('courseType')?.value);
    datasubmit.append('passingYear', this.AdvanceCandidateform.get('passingYear')?.value);
    datasubmit.append('gradingSystem', this.AdvanceCandidateform.get('gradingSystem')?.value);
    datasubmit.append('availability', this.AdvanceCandidateform.get('availability')?.value);
    datasubmit.append('currentSkill', this.AdvanceCandidateform.get('currentSkill')?.value);
    datasubmit.append('preferredSkill', this.AdvanceCandidateform.get('preferredSkill')?.value);
    datasubmit.append('gender', this.AdvanceCandidateform.get('gender')?.value);
    datasubmit.append('maritalStatus', this.AdvanceCandidateform.get('maritalStatus')?.value),
      datasubmit.append('mark', this.AdvanceCandidateform.get('mark')?.value);
    datasubmit.append('image', this.selectImg1);
   
    this.registrationService.submitAdvanceCandidateDetails(this.AdvanceCandidateform.value).subscribe((res: any) => {
      console.log(this.AdvanceCandidateform.value, 'this.AdvanceCandidateform.value');
      this.AdvanceCandidateform.reset();
      this.router.navigate(['ViewBasicCandidate']);
    });
  }

  selectedImg1(event: any) {

    const res = (event.target.files[0] as File);
    this.selectImg1 =res;
    const filereader = new FileReader();
    console.log("kfkvfkk")
    filereader.onload = (e: any) => {
      this.image = e.target.result;
    }
    filereader.readAsDataURL(res);

  }
  expyear:any;
  changeyear(val:any){
   this.expyear=val.target.value;
   console.log(val.target.value,this.AdvanceCandidateform.get('experienceYear')?.value)
  }
  expMonth:any;
  changeMonth(val:any){
   this.expMonth=val.target.value;
  }
  updateeditDataCandidate() {
    this.formSubmitted = true
    console.log(this.AdvanceCandidateform,"hdfkjhfhd")
    var datasubmit = new FormData();
    datasubmit.append('experienceMonth', this.AdvanceCandidateform.get('experienceMonth')?.value);
    datasubmit.append('experienceYear',  this.AdvanceCandidateform.get('experienceYear')?.value);
    datasubmit.append('salaryRangeFrom', this.AdvanceCandidateform.get('salaryRangeFrom')?.value);
    datasubmit.append('salaryRangeTo', this.AdvanceCandidateform.get('salaryRangeTo')?.value);
    // datasubmit.append('locationNative', this.AdvanceCandidateform.get('locationNative')?.value);
    datasubmit.append('locationCurrent', this.AdvanceCandidateform.get('locationCurrent')?.value);
    datasubmit.append('education', this.AdvanceCandidateform.get('education')?.value);
    datasubmit.append('specification', this.AdvanceCandidateform.get('specification')?.value);
    datasubmit.append('university', this.AdvanceCandidateform.get('university')?.value);
    datasubmit.append('courseType', this.AdvanceCandidateform.get('courseType')?.value);
    datasubmit.append('passingYear', this.AdvanceCandidateform.get('passingYear')?.value);
    datasubmit.append('gradingSystem', this.AdvanceCandidateform.get('gradingSystem')?.value);
    datasubmit.append('availability', this.AdvanceCandidateform.get('availability')?.value);
    datasubmit.append('currentSkill', this.AdvanceCandidateform.get('currentSkill')?.value);
    datasubmit.append('preferredSkill', this.AdvanceCandidateform.get('preferredSkill')?.value);
    datasubmit.append('gender', this.AdvanceCandidateform.get('gender')?.value);
    datasubmit.append('maritalStatus', this.AdvanceCandidateform.get('maritalStatus')?.value),
      datasubmit.append('mark', this.AdvanceCandidateform.get('mark')?.value);
    // datasubmit.append('image', this.selectImg1);
    if (this.selectImg1 != null && this.selectImg1 != "") {
      datasubmit.append('image', this.selectImg1);
    }
    if(this.AdvanceCandidateform.valid)
    this.registrationService.candidateUpdateData( datasubmit).subscribe((res: any) => {
      console.log(this.AdvanceCandidateform.value, 'this.AdvanceCandidateform.value');
      this.AdvanceCandidateform.reset();
      this.router.navigate(['ViewBasicCandidate']);
    });
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  latitude:any;
  longtitude:any

  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat(),"address.geometry.location.lat()");
    console.log(address.geometry.location.lng());
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    this.AdvanceCandidateform.patchValue({
      locationCurrent:address.formatted_address
    })
  }
}
