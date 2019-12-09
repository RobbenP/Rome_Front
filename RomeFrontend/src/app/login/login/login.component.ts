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
        localStorage.setItem("token",result.token);
        this._router.navigate(['']);
      })
  }
  ngOnInit() {
  }

}
