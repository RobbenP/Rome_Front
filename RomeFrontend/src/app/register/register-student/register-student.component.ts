import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/models/student.model";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
import { DateBefore } from './date-before';

@Component({
  selector: "app-register-student",
  templateUrl: "./register-student.component.html",
  styleUrls: ["./register-student.component.css"]
})
export class RegisterStudentComponent implements OnInit {
  datum = new Date();
  model: Student = new Student(0, "", "", this.datum, "", "", "", "");
  user: User; 
  studentID: number;
  constructor(
    private _authenticateService: AuthenticateService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  registerForm = this.fb.group({
    nickname: ["", Validators.required],
    name: ["", Validators.required],
    birthDay: ["", Validators.required],
    biography: [""],
    linkedIn: [""],
    experience: [""],
    phonenumber: [""]
  },{
    validator: DateBefore("birthDay")
  });

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this._authenticateService
      .addStudent(this.registerForm.value)
      .subscribe(result => {
        this.model = result;
        this.studentID = this.model.studentID;
        
        this._authenticateService
          .getUser(Number(localStorage.getItem("userID")))
          .subscribe(result => {
            
            this.user = result;
            this.user.studentID =  this.studentID;
            console.log(this.user.studentID);
            this._authenticateService.updateUser(this.user).subscribe();
            localStorage.removeItem("unfinishedRegister");
            if(+localStorage.getItem("roleID2") == 1)
          {
            localStorage.setItem("roleID", "1");
            localStorage.setItem("userID", localStorage.getItem("userID2"));
            localStorage.removeItem("userID2");
            localStorage.removeItem("roleID2");
            this.router.navigate(["admin/gebruikersLijst"]);
          }else 
          {
       //
            this.router.navigate([""]);
          }
           
          });
      });
  }
  ngOnInit() {
    if(localStorage.getItem("unfinishedRegister")!="student") this.router.navigate([""])

  }
}
