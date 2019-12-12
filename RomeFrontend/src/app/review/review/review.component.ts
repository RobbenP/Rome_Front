import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AssignmentService } from "src/app/services/assignment.service";
import { Assignment } from "src/app/models/assignment.model";
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { Review } from "src/app/models/review.model";
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  AssignmentID: number;
  myUserID: number;
  iAmStudent: boolean;
  assingment: Observable<Assignment>;
  whoToReviewUserId: number;
  whoToReview: Observable<User>;
  reviewText: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private userService: UserService,
    private reviewService:ReviewService
  ) {}

  ngOnInit() {
    this.myUserID = +localStorage.getItem("userID");
    this.iAmStudent = +localStorage.getItem("roleID") == 3;
    this.route.params.subscribe(params => {
      this.AssignmentID = params["assignId"];
      this.assingment = this.assignService.getAssignement(this.AssignmentID);
      if (!this.iAmStudent) {
        this.whoToReviewUserId = params["studentId"];
        this.whoToReview = this.userService.getUser(this.whoToReviewUserId);
      } else {
        this.assingment.subscribe(r => {
          this.whoToReviewUserId = r.companyID;
          this.whoToReview = this.userService.getUser(this.whoToReviewUserId);
        });
      }
    });
  }

  onSubmit() {
    let review: Review = new Review(
      0,
      this.reviewText,
      this.myUserID,
      this.whoToReviewUserId,
      this.AssignmentID
    );
    this.reviewService.addReview(review).subscribe(
      r=>{this.router.navigateByUrl("/");
      }
    );
  }
}
