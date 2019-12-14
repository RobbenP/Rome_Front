import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRoute,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class FinishRegisterGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var whatToDo = localStorage.getItem("unfinishedRegister");
    if ((whatToDo == null)) return true;
    if (whatToDo === "student") {
      this.router.navigate(["/registreer/student"]);
      return false;
    } else if (whatToDo === "bedrijf") {
      this.router.navigate(["/registreer/bedrijf"]);
      return false; 
    } else {
      console.log("Dit is raar, hier zou je nooit mogen komen");
      console.log(whatToDo);
      return true;
    }
  }
}
