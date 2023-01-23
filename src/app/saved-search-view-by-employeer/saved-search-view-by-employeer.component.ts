import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-saved-search-view-by-employeer',
  templateUrl: './saved-search-view-by-employeer.component.html',
  styleUrls: ['./saved-search-view-by-employeer.component.css']
})
export class SavedSearchViewByEmployeerComponent implements OnInit {

  constructor(public registrationService: RegistrationService, private router: Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
       this.getSavedSearchData();
  }
  savedSearch:any
  getSavedSearchData(){
    this.registrationService.savedSearchData().subscribe((res:any)=>{
      this.savedSearch = res.user
      console.log(this.savedSearch,"jsfbgKFGFLH")
    })
  }


  history(id:any){

  }

}
