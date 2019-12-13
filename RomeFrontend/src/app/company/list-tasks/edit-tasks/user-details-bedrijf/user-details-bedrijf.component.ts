import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Student } from 'src/app/models/student.model';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-user-details-bedrijf',
  templateUrl: './user-details-bedrijf.component.html',
  styleUrls: ['./user-details-bedrijf.component.css']
})
export class UserDetailsBedrijfComponent implements OnInit {
  private routeSub: Subscription;
  studentID: 0;
  userID:0;
  assignmentID:0;
  studentModel: Student;
  userModel: User;
  reviewsStudent: Review[];
  constructor(private router: Router,
    private route: ActivatedRoute, 
    private assignService: AssignmentService,
    private userService: UserService,
    private reviewService: ReviewService,
    private location: Location) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      this.userID = params['id'];
      this.assignmentID = params['assignmentID'];
      this.userService.getUser(this.userID).subscribe(
        result => {
          this.userModel = result;
          console.log(this.studentModel);
          this.userService.getStudent(this.userModel.studentID).subscribe(
            result =>{
              this.studentModel = result;
              console.log(this.studentModel);
              this.reviewService.getReviewsAboutUser(this.userModel.userID).subscribe(
                result => {
                  this.reviewsStudent = result;
                }
              )
            }
          )
        }
      )
     
    });
  }

  back(){
    this.location.back();
  }
  goReview() {
    this.router.navigateByUrl(
      "/reviewStudent/"  + this.assignmentID + "/" + this.userModel.userID + "/" + localStorage.getItem("userID")
    );
  }
  
}
