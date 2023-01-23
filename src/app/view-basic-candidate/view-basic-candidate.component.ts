import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Env } from '../environment';
@Component({
  selector: 'app-view-basic-candidate',
  templateUrl: './view-basic-candidate.component.html',
  styleUrls: ['./view-basic-candidate.component.css']
})
export class ViewBasicCandidateComponent implements OnInit {

  constructor(public registrationService: RegistrationService, 
    private router: Router,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }
    transform(url: any) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  zoom = 14;
  latitude: any;
  longitude: any;
  ngOnInit(): void {
    this.getBasicDetailsView();
    this.getdisplayData()
    
  }
  data:any=[];
  getBasicDetailsView(){
    this.registrationService.viewBasicDetailsCandidate().subscribe((res:any)=>{
      this.data = res.user[0]
      console.log(this.data,"viewBasicDetailsCandidate")
    })
  }
  viewMap(lat:any, long:any){
this.latitude = parseFloat(lat);
this.longitude = parseFloat(long);
  }

  name:any;
  baseurl = Env.baseAPi;
  viewproduct: any;
  viewproduct_details(item: any,name:any) {
    this.viewproduct = item;
    this.name= name
    console.log(this.baseurl + '/' + item,'asdas');
  }

  datas:any=[];
  getdisplayData(){
    this.registrationService.getcandidateData().subscribe((res:any)=>{
      this.datas = res.user[0];
      console.log(this.datas.candidateDetails.length,"this.data")
    })

}
}
