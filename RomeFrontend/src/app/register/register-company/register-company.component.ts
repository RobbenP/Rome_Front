import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
model: Company = new Company(0,"","","","",0);
  constructor(private _authenticateService: AuthenticateService,private router: Router) { }
  onSubmit(){
    this.model.userID = Number(localStorage.getItem("userID"));
    this._authenticateService.addCompany(this.model).subscribe();
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
