import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  datum = new Date();
model: Student= new Student(0,"","",this.datum,"","","","",0);
  constructor(private _authenticateService: AuthenticateService,private router: Router) { }
  onSubmit(){
    this.model.userID = Number(localStorage.getItem("userID"));
    console.log(this.model.birthDay);
    this._authenticateService.addStudent(this.model).subscribe();
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
