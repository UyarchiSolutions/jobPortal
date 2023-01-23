import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    console.log("sjhkdsjkfhlbsdjkf")
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    // this.route.navigate(['/login'])
  }
  employee(e:any){

  }
  admin(evnt:any){

  }
}
