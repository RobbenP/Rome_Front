import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-user-admin-review',
  templateUrl: './user-admin-review.component.html',
  styleUrls: ['./user-admin-review.component.css']
})
export class UserAdminReviewComponent implements OnInit {
reviewFromModel: Review[];
reviewAboutModel: Review[];
userID:0;
users: User[];
assignments: Assignment[];

private routeSub: Subscription;
  constructor(private router: Router,
    private route: ActivatedRoute, 
    private reviewService: ReviewService,
    private userService: UserService,
    private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      this.userID = params['id']})
    this.reviewService.getReviewsFromUser(this.userID).subscribe(
      result => {
        this.reviewFromModel = result;
        this.userService.getUsers().subscribe(
          result => {
            this.users = result;
            this.assignmentService.getAssignments().subscribe(
              result => {
                this.assignments = result;
              }
            )
          }
        )
      }
      
    )
    this.reviewService.getReviewsAboutUser(this.userID).subscribe(
      result => {
        this.reviewAboutModel = result;
      }
    )
    
   
  }
  deleteReview(reviewID:number){
    this.reviewService.deleteReview(reviewID).subscribe();
    window.location.reload();
  }
}
