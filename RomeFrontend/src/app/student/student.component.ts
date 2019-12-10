import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { 
    if(localStorage.getItem("refreshed") == "0")
    {
      
      localStorage.setItem("refreshed", "1" );
      window.location.reload();
    }
  }

  ngOnInit() {
   
  }

  takenlijst(){
    this.router.navigate(['student/takenlijst'])
  }

}
