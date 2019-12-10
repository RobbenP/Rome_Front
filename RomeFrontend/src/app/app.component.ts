import { Component } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RomeFrontend';

  constructor(private _authenticateService: AuthenticateService)
  {
    this._authenticateService.isLoggedin.subscribe(e => {
      var roleid = Number(localStorage.getItem("roleID"));
      console.log(roleid);
      var startPagina = true;
      var studentPagina = false;
      var companyPagina = false;
      var adminPagina = false;
      if(roleid == 3)
      {
        studentPagina = true;
      }
      if(roleid == 2)
      {
        companyPagina = true;
      }
      if(roleid == 1)
      {
        adminPagina = true;
      }
      
    })
  }
}
