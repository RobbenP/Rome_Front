import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { Role } from "src/app/models/role.model";
import { User } from "src/app/models/user.model";
import { observable, Observable } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  roles: Role[];
  selecteerdeRol;
  model: User = new User(0, "", "", "", 0, "", null, null);
  gebruiker;
  wroungUser: boolean = false;
  adminRole:string;
  constructor(
    private _authenticateService: AuthenticateService,
    private router: Router
  ) {
    this._authenticateService.getRoles().subscribe(result => {
      this.roles = result;
    });
  }
  onSelectionChange(rol) {
    this.selecteerdeRol = rol;
  }
  onSubmit() {
    
    this._authenticateService.addUser(this.model).subscribe(
      result => {
        this.gebruiker = result;
        this.model = this.gebruiker;
        if (this.model.roleID == 2) {
          localStorage.setItem("unfinishedRegister", "bedrijf");
          this.router.navigate(["registreer/bedrijf"]);
        }
        if (this.model.roleID == 3) {
          localStorage.setItem("unfinishedRegister", "student");
          this.router.navigate(["registreer/student"]);
        }
        if(this.model.roleID == 1){
          this.router.navigate([""]);
        }

        localStorage.setItem("userID", this.model.userID.toString());
        localStorage.setItem("rolid", this.model.userID.toString());
      },
      error => {
        console.log("er is error");
        
        if (error.status == 403) {
          this.wroungUser = true;
          console.log("we zetten wroung op true");
          
        }
      }
    );
  }
  ngOnInit(
    
  ) {
    if(+localStorage.getItem("roleID") == 1)
    {
      localStorage.setItem("roleID2", "1");
      localStorage.setItem("userID2", localStorage.getItem("userID"));
      this.adminRole = "1";
    } 
    }
}
