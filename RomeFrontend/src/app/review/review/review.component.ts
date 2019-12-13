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
  whoToReview$: User;
  reviewText: string = "";
  reviewId: 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private userService: UserService,
    private reviewService:ReviewService
  ) {}

  ngOnInit() {
    if(+localStorage.getItem("roleID") == 1)
    {
      this.route.params.subscribe(params => {
        this.myUserID = params["studentId"];
        this.iAmStudent = true;
      })
    }else 
    {
      this.myUserID = +localStorage.getItem("userID");
      this.iAmStudent = +localStorage.getItem("roleID") == 3;
    }
    
    this.route.params.subscribe(params => {
      this.AssignmentID = params["assignId"];
      this.assingment = this.assignService.getAssignement(this.AssignmentID);
      if (!this.iAmStudent) {
        this.whoToReviewUserId = params["studentId"];
        this.whoToReview = this.userService.getUser(this.whoToReviewUserId);
        this.userService.getUser(this.whoToReviewUserId).subscribe(
          result => {
            this.whoToReview$ = result;
          }
        )
      } else {
        this.assingment.subscribe(r => {
          this.whoToReviewUserId = r.companyID;
          this.whoToReview = this.userService.getCompany(this.whoToReviewUserId);
          this.userService.getCompany(this.whoToReviewUserId).subscribe(
            result => {
              this.whoToReviewUserId  = result.userID;
             console.log(this.whoToReviewUserId);
            }
          )
        });
      }
      
    });
    this.route.params.subscribe(params => {
      this.reviewId = params["reviewId"];
      if(this.reviewId != 0){
        this.reviewService.getReview(this.reviewId).subscribe(
          result => {
            this.reviewText = result.reviewText;
            this.myUserID = result.userPlacerID;
            this.whoToReviewUserId = result.userRecieverID;
          }
        )
      }
    })
     
  }

  onSubmit() {
    console.log(this.whoToReviewUserId);

    let review: Review = new Review(
      this.reviewId,
      this.reviewText,
      this.myUserID,
      Number(this.whoToReviewUserId),
      this.AssignmentID
    );
    if(review.reviewID == 0)
    {
      this.reviewService.addReview(review).subscribe(
        r=>{this.router.navigateByUrl("/");
        }
      );
    }else
    {
      this.reviewService.updateReview(review).subscribe(
        r=>{}
      );
      
    }
    
  }
}
