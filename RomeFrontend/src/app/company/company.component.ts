import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private router: Router) {
    if(localStorage.getItem("refreshed") == "0")
    {
      
      localStorage.setItem("refreshed", "1" );
      window.location.reload();
    }
   }

  ngOnInit() {
   
  }

  lijstTaken(){
    
    this.router.navigate(['bedrijf/takenlijst'])
  }
}
