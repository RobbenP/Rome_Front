import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      let user: User = await this.authService.getMe();
      return true;
    } catch (error) {
      this.router.navigate([""]);
      console.log("Je moet ingelogd zijn en dat ben je niet");
      
      return false;
    }
  }
}