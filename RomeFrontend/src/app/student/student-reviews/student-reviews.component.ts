import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { User } from 'src/app/models/user.model';
import { Assignment } from 'src/app/models/assignment.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-student-reviews',
  templateUrl: './student-reviews.component.html',
  styleUrls: ['./student-reviews.component.css']
})
export class StudentReviewsComponent implements OnInit {
  reviewAboutModel: Review[];
  userID:number;
  users: User[];
  assignments: Assignment[];
  constructor(private router: Router,
    private route: ActivatedRoute, 
    private reviewService: ReviewService,
    private userService: UserService,
    private assignmentService: AssignmentService,
   
    private location: Location) { }

  ngOnInit(
  ) {
    this.userID = +localStorage.getItem("userID");
   this.reviewService.getReviewsAboutUser(this.userID).subscribe(
     result => {
       this.reviewAboutModel = result;
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
  }
  back()
  {
    this.location.back();
  }
}
