import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuardService implements CanActivate {
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
      if (user.roleID != 2) {
        console.log("Je moet een bedrijf zijn");

        this.router.navigate([""]);
        return false;
      } else return true;
    } catch (error) {
      console.log("Je moet een bedrijf zijn");
      this.router.navigate([""]);
      return false;
    }
  }
}
