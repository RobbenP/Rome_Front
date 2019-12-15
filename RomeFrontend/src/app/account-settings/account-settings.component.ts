import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { UserService } from "src/app/services/user.service";
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Student } from '../models/student.model';

import {Locaties} from '../models/location.model';
import { AuthenticateService } from '../services/authenticate.service';
import { Location} from '@angular/common';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  userID: number;
 userModel: User;
 studentModel: Student;
 companyModel: Company;
  locations: Locaties[];
  locatie =   new Locaties(0,"","",0);
 password = "";
 currentpassword = "";
 newpassword = "";
 confirmpassword = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private companyService: CompanyService,
    private authenticateService: AuthenticateService,
    private location: Location
  ) { }

  ngOnInit() {

    if(+localStorage.getItem("roleID") == 1)
    {
      this.route.params.subscribe(params => {
    
        this.userID = params['id']});
    }else {
      this.userID = +localStorage.getItem("userID");
    }

  
   this.userService.getUser(this.userID).subscribe(
     result => {
        this.userModel = result;
        this.password = this.userModel.password;
        if(this.userModel.studentID != null)
        {
          this.userService.getStudent(this.userModel.studentID).subscribe(
            result =>{
              this.studentModel = result;
              this.studentModel.birthDay = new Date(this.studentModel.birthDay);
              console.log(this.studentModel.birthDay)
            }
          )
        }else if(this.userModel.companyID != null)
        {
          this.userService.getBedrijf(this.userModel.companyID).subscribe(
            result => {
              this.companyModel = result;
              this.locatie.companyID = result.companyID;
              this.companyService.getLocationsForCompany(this.companyModel.companyID).subscribe(
                result => {
                  this.locations = result;
                  
               //   this.locations = result;
                }
              )
            }
          )
        }

     }
   )
  }
  onSubmit(){
    
    if (this.password == this.currentpassword){
      if((this.newpassword != "") && (this.newpassword == this.confirmpassword)){
        this.userModel.password = this.newpassword;
        this.onSubmitDeRest();
      }else if(this.newpassword == "" || this.confirmpassword =="")
      {
        new alert ("Zorg dat beide passwoorden zijn ingevuld en hetzelfde zijn")
      }
      
      else if(this.newpassword != this.confirmpassword){
        new alert("Zorg dat beide passwoorden hetzelfde zijn");
      }
    
    }
    else if(this.currentpassword == "" && this.newpassword == "" && this.confirmpassword =="")
    {
        this.onSubmitDeRest();
    }
    else if(this.password != this.currentpassword) {
      new alert("vul het juiste passwoord in");
    }


      
  }
  onSubmitDeRest(){
    this.userService.updateUser(this.userModel).subscribe( result => {
      if(this.userModel.studentID != null)
      {
        
        this.userService.updateStudent(this.studentModel).subscribe(
          result => {
            if(+localStorage.getItem("roleID") == 1){
              this.router.navigate(['/admin/gebruikersLijst']);
            }else 
            {
              this.router.navigate(['']);
            }
          }
        )
      }else if(this.userModel.companyID != null)
      {
        
        this.companyService.updateCompany(this.companyModel).subscribe( result => {
          this.companyService.updateLocations(this.companyModel.companyID, this.locations).subscribe(
            result => {
              this.authenticateService.addLocation(this.locatie).subscribe();
            }
          );
          if(+localStorage.getItem("roleID") == 1){
            this.router.navigate(['/admin/gebruikersLijst']);
          }else 
          {
            this.router.navigate(['']);
          }
   
        })
      }
      
    });
  }
  back(){
    this.location.back();
  }
}
