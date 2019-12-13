import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { Location } from "src/app/models/location.model";
import { ReviewService } from "src/app/services/review.service";
import { Review } from "src/app/models/review.model";

@Component({
  selector: "app-info-bedrijf",
  templateUrl: "./info-bedrijf.component.html",
  styleUrls: ["./info-bedrijf.component.css"]
})
export class InfoBedrijfComponent implements OnInit {
  userId: number;
  user: Observable<User>;
  bedrijf: Observable<Company>;
  reviews: Observable<Review[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private userService: UserService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params["id"];
      this.user = this.userService.getUser(this.userId);
      this.user.subscribe(r => {
        this.bedrijf = this.companyService.getCompany(r.companyID);
      });
      this.reviews = this.reviewService.getReviewsAboutUser(this.userId);
      this.reviews.subscribe(r => {
        console.log("reviews");
        console.log(r);
      });
    });
  }
  log(test) {
    console.log(test);
  }
  mail() {
    let mail = document.createElement("a");
    this.user.subscribe(r => {
      mail.href = "mailto:" + r.email;
      mail.click();
      console.log(mail.href);
    });
  }

  call() {
    let cal = document.createElement("a");
    this.bedrijf.subscribe(r => {
      cal.href = "tel:" + r.phoneNumber;
      cal.click();
    });
  }
}
