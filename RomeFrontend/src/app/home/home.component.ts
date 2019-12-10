import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roleid: any;
  constructor(private router: Router, private _authenticateService : AuthenticateService) { }

  ngOnInit() {
    this._authenticateService.isLoggedin.subscribe(e=> {
      this.roleid = localStorage.getItem("roleID");
      if (this.roleid == "1"){
        this.router.navigate(['admin']);
      }
      else if (this.roleid == "2"){
        this.router.navigate(['bedrijf']);
      }
      else if (this.roleid == "3"){
        this.router.navigate(['student']);
      }
    })
    if(localStorage.getItem("refreshed") == "1")
    {
      window.location.reload();
      localStorage.removeItem("refreshed");
    }
  }

}
