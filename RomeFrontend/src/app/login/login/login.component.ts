import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Userlogin } from 'src/app/models/userlogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Userlogin = new Userlogin('','');
  constructor(private _authenticateService: AuthenticateService, private _router: Router) { }

  onSubmit(){
    this._authenticateService.authenticate(this.model).subscribe(result =>
      {
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        localStorage.setItem("token",result.token);
        console.log(result);
        localStorage.setItem("userID", result.userID.toString());
        localStorage.setItem("roleID", result.roleID.toString());
        this._router.navigate(['']);
        if(result.studentID != null)
        {
          localStorage.setItem("studentID", result.studentID.toString());
          this._router.navigate(["student/takenlijst"]);
        }
        if(result.companyID != null)
        {
          localStorage.setItem("companyID", result.companyID.toString());
          this._router.navigate(["bedrijf/takenlijst"]);
        }
      })
  }
  ngOnInit() {
  }

 

}
