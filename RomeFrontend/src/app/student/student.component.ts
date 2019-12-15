import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 userID : number;
  constructor(private router: Router) { 
   
  }

  ngOnInit() {
   this.userID = +localStorage.getItem("userID");
  }

  takenlijst(){
    this.router.navigate(['student/takenlijst'])
  }

}
