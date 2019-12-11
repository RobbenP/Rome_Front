import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
roles: Role[];
selecteerdeRol;
model : User = new User(0,"","","",0,"",null,null);
gebruiker ;
  constructor(private _authenticateService: AuthenticateService,private router: Router) { 
    this._authenticateService.getRoles().subscribe(
      result =>{
        this.roles = result;
      }
    )
  }
  onSelectionChange(rol){
    this.selecteerdeRol = rol;
    
  }
  onSubmit(){   
    
    this._authenticateService.addUser(this.model).subscribe(
      result =>{
        
        this.gebruiker = result;
        this.model = this.gebruiker;
      
        localStorage.setItem("userID", this.model.userID.toString());
      }
    );
    
    if(this.model.roleID == 2)
    {
      this.router.navigate(['registreer/bedrijf']);
    }
    if(this.model.roleID == 3)
    {
      this.router.navigate(['registreer/student']);
    }
  }
  ngOnInit() {
    
  }
}
