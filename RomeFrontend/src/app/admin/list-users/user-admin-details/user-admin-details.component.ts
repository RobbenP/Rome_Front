import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.service';
import { User } from 'src/app/models/user.model';
import { Student } from 'src/app/models/student.model';
import { Company } from 'src/app/models/company.model';

import { Locaties } from 'src/app/models/location.model';

@Component({
  selector: 'app-user-admin-details',
  templateUrl: './user-admin-details.component.html',
  styleUrls: ['./user-admin-details.component.css']
})
export class UserAdminDetailsComponent implements OnInit {
 userID: number;
 userModel: User;
 studentModel: Student;
 companyModel: Company;
 locations: Locaties[];
 password = "";
 currentpassword = "";
 newpassword = "";
 confirmpassword = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
    
      this.userID = params['id']});
   this.userService.getUser(this.userID).subscribe(
     result => {
        this.userModel = result;
        this.password = this.userModel.password;
        if(this.userModel.studentID != null)
        {
          this.userService.getStudent(this.userModel.studentID).subscribe(
            result =>{
              this.studentModel = result;
            }
          )
        }else if(this.userModel.companyID != null)
        {
          this.userService.getBedrijf(this.userModel.companyID).subscribe(
            result => {
              this.companyModel = result;
              this.companyService.getLocationsForCompany(this.companyModel.companyID).subscribe(
                result => {
                  this.locations = result;
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
            this.router.navigate(['/admin/gebruikersLijst']);
          }
        )
      }else if(this.userModel.companyID != null)
      {
        
        this.companyService.updateCompany(this.companyModel).subscribe( result => {
          this.companyService.updateLocations(this.companyModel.companyID, this.locations).subscribe();
          this.router.navigate(['/admin/gebruikersLijst'])
        })
      }
      
    });
  }
}
