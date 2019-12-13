import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.service';
import { User } from 'src/app/models/user.model';
import { Student } from 'src/app/models/student.model';
import { Company } from 'src/app/models/company.model';
import { Location } from '@angular/common';

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
 locations: Location[];
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
      }
    }

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
