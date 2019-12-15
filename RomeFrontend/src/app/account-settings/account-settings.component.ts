import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.service';
import { User } from 'src/app/models/user.model';
import { Student } from 'src/app/models/student.model';
import { Company } from 'src/app/models/company.model';
import { Location, DatePipe } from '@angular/common';

import { Locaties } from 'src/app/models/location.model';
import { AuthenticateService } from '../services/authenticate.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
  providers: [DatePipe]
})
export class AccountSettingsComponent implements OnInit {


 userModel: User;

;
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
    private location: Location,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.userModel = this.route.snapshot.data["gebruikers"][0]; 
    console.log(this.userModel);
    console.log(this.locations);
    if(this.userModel.companyID != null)
    {
      this.companyService.getLocationsForCompany(this.userModel.companyID).subscribe(
        result =>
        {
          this.locations = result;
        }
      )
    }

  }
  onSubmit(){
    
    if (this.userModel.password == this.currentpassword){
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
    
    this.userService.updateUserGegevens(this.userModel).subscribe(result => {
  
    
    });
    if(+localStorage.getItem("roleID") ==1 )
    {
       this.router.navigate(['/admin/gebruikersLijst']);
    }else 
    {
       this.router.navigate(['']);
    }
    if(this.locations != null)
    {

      this.companyService.updateLocations(this.userModel.companyID, this.locations).subscribe(
        result => {
          if(this.locatie.townShip != "" || this.locatie.adress != ""){
            this.locatie.companyID = this.userModel.companyID;
            this.authenticateService.addLocation(this.locatie).subscribe();
          }
       
        }
      );
    }
    
  }
  back(){
    this.location.back();
  }
}
