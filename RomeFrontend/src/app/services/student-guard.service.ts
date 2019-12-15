import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRoute,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { AuthenticateService } from "./authenticate.service";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class StudentGuardService implements CanActivate {
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
      if (user.roleID != 3) {
        console.log("Je moet een student zijn");

        this.router.navigate([""]);
        return false;
      } else return true;
    } catch (error) {
      console.log("Je moet een student zijn");  
      this.router.navigate([""]);
      return false;
    }
  }
}
