import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  datum = new Date();
  model: Student= new Student(0,"","",this.datum,"","","","");
  user: User;
  constructor(private _authenticateService: AuthenticateService,private router: Router) { }
  onSubmit(){
   
    console.log(this.model.birthDay);
    this._authenticateService.addStudent(this.model).subscribe(
      result =>{
        this.model = result;
        this._authenticateService.getUser(Number(localStorage.getItem("userID"))).subscribe(
          result =>{
            this.user = result;
            this.user.studentID = this.model.studentID;
            this._authenticateService.updateUser(this.user).subscribe();
            this.router.navigate(['/login']);
          }
        )
      }
    );
    
  }
  ngOnInit() {
  }

}
