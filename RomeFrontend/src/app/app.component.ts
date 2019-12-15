import { Component, ChangeDetectorRef } from "@angular/core";
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
  loading: boolean;

  constructor(
    private router: Router,
    public authenticateService: AuthenticateService,
    private ref: ChangeDetectorRef
  ) {
    this.loading = false;
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
  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  logout() {
    this.authenticateService.logout();
  }
}
