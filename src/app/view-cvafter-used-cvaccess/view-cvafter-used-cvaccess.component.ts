import { Component, OnInit,ViewChild, ElementRef, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Env } from '../environment';
import { RegistrationService } from '../services/registration.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-cvafter-used-cvaccess',
  templateUrl: './view-cvafter-used-cvaccess.component.html',
  styleUrls: ['./view-cvafter-used-cvaccess.component.css']
})
export class ViewCVAfterUsedCVAccessComponent implements OnInit {

  constructor(
    public registrationService: RegistrationService,
     private router: Router,
     public route: ActivatedRoute,
     private sanitizer: DomSanitizer
     ) { }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  baseurl = Env.baseAPi;
  ngOnInit(): void {
    this.getCvData();
  }
  name:any;
  data:any
  viewproduct: any;
  viewproduct_details(item: any,name:any) {
    this.viewproduct = item;
    this.name= name
    console.log(this.baseurl + '/' + item,'sdssssssssssssssssssssssss');
  }

  getCvData(){
    this.registrationService.getCvDataView().subscribe((res:any)=>{
      this.data = res
    })
  }
  history(id:any){

  }

}
