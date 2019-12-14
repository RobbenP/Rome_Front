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

  constructor(private router: Router,public authenticateService: AuthenticateService)
  {
   
  }
  ngOnInit() {
  }

  logout(){
    this.authenticateService.logout();
  }
}
