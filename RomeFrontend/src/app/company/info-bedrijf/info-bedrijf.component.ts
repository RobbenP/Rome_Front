import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { ReviewService } from "src/app/services/review.service";
import { Review } from "src/app/models/review.model";

@Component({
  selector: "app-info-bedrijf",
  templateUrl: "./info-bedrijf.component.html",
  styleUrls: ["./info-bedrijf.component.css"]
})
export class InfoBedrijfComponent implements OnInit {
  userId: number;
  user: User;
  bedrijf: Company;
  reviews: Review[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private userService: UserService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data["data"][0];
    this.bedrijf = this.route.snapshot.data["data"][1];
    this.reviews = this.route.snapshot.data["data"][2];
  }

  mail() {
    let mail = document.createElement("a");

    mail.href = "mailto:" + this.user.email;
    mail.click();
    console.log(mail.href);
  }

  call() {
    let cal = document.createElement("a");

    cal.href = "tel:" + this.bedrijf.phoneNumber;
    cal.click();
  }

  // mail() {
  //   let mail = document.createElement("a");
  //   this.user.subscribe(r => {
  //     mail.href = "mailto:" + r.email;
  //     mail.click();
  //     console.log(mail.href);
  //   });
  // }

  // call() {
  //   let cal = document.createElement("a");
  //   this.bedrijf.subscribe(r => {
  //     cal.href = "tel:" + r.phoneNumber;
  //     cal.click();
  //   });
  // }
}
