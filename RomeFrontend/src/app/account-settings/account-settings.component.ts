import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { UserService } from "src/app/services/user.service";
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  userModel : User;
  companyModel: Company;
  submitted: boolean = false;
  userID = parseInt(localStorage.getItem("userID"));
  password = "";
  currentpassword = "";
  newpassword = "";
  confirmpassword = "";

  checkID = 2;
  check = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userService: UserService,
    private _companyService: CompanyService
  ) { }

  ngOnInit() {
    this.getInfo();
    if (this.checkID != parseInt(localStorage.getItem("roleID"))){
      this.check = true;
    }
  }

  onSubmit() {
 
   
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
  onSubmitDeRest()
  {
   
    this._userService.updateUser(this.userModel).subscribe( result => {
      this._companyService.updateCompany(this.companyModel).subscribe( result => {
        this.router.navigate(['/bedrijf'])
      })
    });    

 
  }
  getInfo (){
    this._userService.getUser(this.userID).subscribe
      (data => {
        this.userModel = data;
        this.password = data.password
        this._companyService.getCompany(data.companyID).subscribe
          (dataCompany => {
            this.companyModel = dataCompany;
          });
      });
  }
}
