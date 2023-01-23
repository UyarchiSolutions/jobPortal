import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-saved-search-view-candidate',
  templateUrl: './saved-search-view-candidate.component.html',
  styleUrls: ['./saved-search-view-candidate.component.css']
})
export class SavedSearchViewCandidateComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

id:any
keyskilldata:any;
courseTypedata:any;
experienceMonthFromdata:any
experienceMonthTodata:any
salaryFromdata:any
salaryTodata:any
locationCurrentdata:any
anyKeywords:any


  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.id = res.id;
      this.keyskilldata = res.keyskilldata,
      this.courseTypedata = res.courseTypedata,
      this.experienceMonthFromdata = res.experienceMonthFromdata,
      this.experienceMonthTodata = res.experienceMonthTodata,
      this.salaryFromdata = res.salaryFromdata,
      this.salaryTodata = res.salaryTodata,
      this.locationCurrentdata =res.locationCurrentdata,
      this.anyKeywords = res.anyKeywords


      console.log(this.id, 'jjjjjjjjjj');
      console.log(this.keyskilldata, 'jjjjjjjjjj');
      console.log(this.courseTypedata, 'jjjjjjjjjj');
      console.log(this.experienceMonthFromdata, 'jjjjjjjjjj');
      console.log(this.experienceMonthTodata, 'jjjjjjjjjj');
      console.log(this.id, 'jjjjjjjjjj');
    
      // this.getDisplayJobAlert(this.id);
    });
  }

  data:any

  Remove(){
    this.registrationService.removeSearch(this.id).subscribe((res:any)=>{
      
    })

  }

}
