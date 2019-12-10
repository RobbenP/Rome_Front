import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Location } from 'src/app/models/location.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
model: Company = new Company(0,"","","","");
locatie: Location = new Location(0,"","",0);
user: User;
user2: User;

  constructor(private _authenticateService: AuthenticateService,private router: Router, private formBuilder: FormBuilder) { 
    
  }

  onSubmit(){
    
    this._authenticateService.addCompany(this.model).subscribe(
      result =>{
        this.model = result;
        this.locatie.companyID = this.model.companyID;
        localStorage.setItem("test", this.locatie.adress);
        this._authenticateService.addLocation(this.locatie).subscribe();
      this._authenticateService.getUser(Number(localStorage.getItem("userID"))).subscribe(
        result =>{
          this.user = result;
       
          this.user.companyID = this.model.companyID;
          
         this._authenticateService.updateUser(this.user).subscribe();
         
         this.router.navigate(['/login']);
        }
      );
      }
      
    );
 
  }
  ngOnInit() {
    
  }


 

}
