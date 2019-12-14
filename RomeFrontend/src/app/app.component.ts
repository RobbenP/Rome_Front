import { Component } from "@angular/core";
import { AuthenticateService } from "./services/authenticate.service";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Binary Beasts";
  loading: boolean = false;

  constructor(
    private router: Router,
    public authenticateService: AuthenticateService
  ) {
    router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  ngOnInit() {}

  logout() {
    this.authenticateService.logout();
  }
}
