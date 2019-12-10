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
      window.location.reload();
      localStorage.setItem("refreshed", "1" );
    }
   }

  ngOnInit() {
  }

  takenlijst(){
    this.router.navigate(['/bedrijf/takenlijst'])
  }


}
