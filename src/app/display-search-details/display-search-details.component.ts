import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-display-search-details',
  templateUrl: './display-search-details.component.html',
  styleUrls: ['./display-search-details.component.css'],
})
export class DisplaySearchDetailsComponent implements OnInit {
  constructor(public registrationService: RegistrationService, private router: Router, public route: ActivatedRoute) {}
  mydata: any = [];
  displaycount = 0;
  page = 0;
  pagetotal = 0;
  totalcount = 0;
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.mydata = params;
    });
    this.getdetailssearch(JSON.parse(this.mydata.data));
  }
  getdata: any;
  getdetailssearch(data: any) {
    this.registrationService.searchDetails(data).subscribe((res: any) => {
      this.getdata = res.user;
      console.log(this.getdata, 'getdata');
    });
  }

  pagination(count: any) {
    if (count == 1) {
      this.page++;
    } else if (count == 2) {
      this.page = this.pagetotal - 1;
    } else if (count == 3) {
      this.page = 0;
      console.log(this.page);
    } else {
      if (this.page > 0) {
        this.page--;
      }
    }
  }
  CvCount(id:any,data:any){
    this.registrationService.CvCountUpdate(id,data).subscribe((res: any) => {
      window.location.reload();
  
  })
}
arr: any = [];
data:any;
getCheckedData(e:any,data:any,id:any){
  if (e.target.checked) {
    this.arr.push(id);
  } else {
    if (this.arr.findIndex((a: any) => a == id) != -1) {
      this.arr.splice(this.arr.findIndex((a: any) => a == id), 1)
    }
  }
  console.log(this.arr);
}
savecandidate(){
  const data = {
    candidateId: this.arr
  }
  console.log(data);
  this.registrationService.savecandidateAfterSearch(data).subscribe((res:any)=>{
    console.log(data);
    window.location.reload();
  })
}
}
