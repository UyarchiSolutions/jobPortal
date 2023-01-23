import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.css']
})
export class CandidateRegistrationComponent implements OnInit {

  constructor(public RegistrationService: RegistrationService,private router: Router) { }

  resume: any = '';
  categoryiamge: any;
  formsubmited = false;
  Candidateform: any;
  latitude: any;
  longtitude: any;
  lat: any = 13.0827;
  long: any = 80.2707;
  displayMsg = false;
  verfiyemail = false

  ngOnInit(): void {
    this.Candidateform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      resume: new FormControl('', Validators.required),
      workStatus: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      long: new FormControl('', Validators.required),
      // address: new FormControl(this.myAddres)
      addressLoaction : new FormControl('')
    });

    navigator.geolocation.getCurrentPosition((position: any) => {
      this.latitude = position.coords.latitude;
      this.longtitude = position.coords.longitude;
      console.log(this.longtitude, 'this.longtitude');
      console.log(this.latitude, 'this.latitude');
    });
  }

  tokens: any;
  refresh: any;
  gettoken: any;
  users: any;
  datastore: any;
  isdisplay = false;
  submit() {
    this.Candidateform.patchValue({
      lat: this.latitude,
      long: this.longtitude
    })
    var jobForm = new FormData();
    jobForm.append('name', this.Candidateform.get('name')?.value);
    jobForm.append('email', this.Candidateform.get('email')?.value);
    jobForm.append('password', this.Candidateform.get('password')?.value);
    jobForm.append('confirmpassword', this.Candidateform.get('confirmpassword')?.value);
    jobForm.append('workStatus', this.Candidateform.get('workStatus')?.value);
    jobForm.append('mobileNumber', this.Candidateform.get('mobileNumber')?.value);
    jobForm.append('lat', this.Candidateform.get('lat')?.value);
    jobForm.append('long', this.Candidateform.get('long')?.value);
    jobForm.append('resume', this.categoryiamge);
    // jobForm.append('',this.myAddres)
    this.formsubmited = true;
  
  

      this.RegistrationService.submitcandicate(jobForm).subscribe(
        (res: any) => {
          this.displayMsg = true;
          console.log(res, 'ssss');

          this.tokens = res.tokens;
          console.log(this.tokens, 'this.tokens');
          this.refresh = res.tokens.access;
          console.log(this.refresh, ' this.refresh');
          this.gettoken = res.tokens.access.token;
          console.log(this.gettoken, '  this.gettoken');

          var object = { valuedata: res.tokens.access.token };
          localStorage.setItem('tokendata', JSON.stringify(object));

          this.users = res.user;
          this.datastore = res.user.id;
          console.log(this.datastore, 'this.users');

          localStorage.setItem('canid', this.datastore);
           this.verfiyemail = true
           console.log(this.verfiyemail, 'this.verfiyemail');
          // alert('Thank You For Your Registration!! Please Check Your Email!! Verification Link Sent!!');
          // this.router.navigate(['VeriftOPT']);
        },
        error => {
          error.error.message;
          this.isdisplay = true;

          console.log(error.error.message, 'ppppp');
        }
      );
    

    // this.Candidateform = true;
    // if(this.Candidateform.valid)
    // this.RegistrationService.submitcandicate(this.Candidateform.value).subscribe((res:any)=>{
    //   console.log(this.Candidateform.value,"this.Candidateform.value")
    //   this.router.navigate(['/VeriftOPT'])
    // })
  }
  change_image(file: any) {
    this.categoryiamge = null;
    const res = file.target.files[0] as File;
    console.log(res, 'response');
    if (res != null) {
      console.log(res, this.categoryiamge, 'aas');
      if (
        res.type == 'application/pdf' ||
        res.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        this.categoryiamge = res;
      }
    }
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
    this.Candidateform.patchValue({
      lat: address.geometry.location.lat(),
      long: address.geometry.location.lng(),
      // addressLoaction:address.formatted_address
      
    })
  }
  fileData: any;
  changefloat(value: any) {
    return parseFloat(value);
  }

  selectFile(event: any) {
    this.fileData = event.target.files[0];

    if (this.fileData.type == 'application/pdf') {
    } else {
      alert('file type should be of pdf');
      return;
    }
  }
  myAddres: any;
  draggEnded($event: any) {
    this.Candidateform.patchValue({
      lat: $event.latLng.lat(),
      long: $event.latLng.lng(),
     
    });
    this.RegistrationService.getAddress($event.latLng.lat(), $event.latLng.lng()).subscribe((res: any) => {
      console.log(res.results);
      if (res.results.length != 0) {
        this.myAddres = res.results[0].formatted_address;
        this.Candidateform.patchValue({
          addressLoaction:this.myAddres
        })
      }
    });
  }
  parseFloat(int: any) {
    return parseFloat(int);
  }
}
