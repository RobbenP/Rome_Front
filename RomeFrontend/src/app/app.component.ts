import { Component } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RomeFrontend';
 roleid: string;
 startPagina: boolean;
 adminPagina: boolean;
 studentPagina: boolean;
 companyPagina: boolean;
  constructor(private router: Router,private _authenticateService: AuthenticateService)
  {
   
  }
  ngOnInit() {
    this.startPagina= true;
   
    this.adminPagina =false;
    this.studentPagina = false;
    this.companyPagina = false;
    this.roleid = localStorage.getItem("roleID");
    console.log(this.startPagina);
      if (this.roleid == "1"){
        this.adminPagina = true;
        this.startPagina= false;
      }
      else if (this.roleid == "2"){
        this.companyPagina = true;
        this.startPagina= false;
      }
      else if (this.roleid == "3"){
        this.studentPagina = true;
        this.startPagina= false;
      }
      else if (this.roleid == null ){
        this.startPagina = true;
      }
  }

  logout(){
    localStorage.clear();
    localStorage.setItem("refreshed", "1" );
  }
}
