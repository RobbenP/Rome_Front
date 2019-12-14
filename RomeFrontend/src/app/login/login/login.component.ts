import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { Userlogin } from "src/app/models/userlogin.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model: Userlogin = new Userlogin("", "");
  roleid: any;
  fout: boolean = false;
  constructor(
    private _authenticateService: AuthenticateService,
    private _router: Router
  ) {}

  async onSubmit() {
    try {
      const result = await this._authenticateService.authenticate(this.model);
      if (result.studentID != null) {
        localStorage.setItem("studentID", result.studentID.toString());
      }
      if (result.companyID != null) {
        localStorage.setItem("companyID", result.companyID.toString());
      }
    } catch (error) {
      if (error.statusText == "Bad Request") {
        this.fout = true;
      }
    }

    this.roleid = Number(localStorage.getItem("roleID"));
    if (this.roleid == 1) {
      this._router.navigate(["admin"]);
    } else if (this.roleid == 2) {
      this._router.navigate(["bedrijf"]);
    } else if (this.roleid == 3) {
      this._router.navigate(["student"]);
    }
  }

  ngOnInit() {
    this._authenticateService.isLoggedin$.subscribe(e => {
      this.roleid = Number(localStorage.getItem("roleID"));
      if (this.roleid == 1) {
        this._router.navigate(["admin"]);
      } else if (this.roleid == 2) {
        this._router.navigate(["bedrijf"]);
      } else if (this.roleid == 3) {
        this._router.navigate(["student"]);
      }
    });
  }
}
