import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Student } from 'src/app/models/student.model';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-user-details-bedrijf',
  templateUrl: './user-details-bedrijf.component.html',
  styleUrls: ['./user-details-bedrijf.component.css']
})
export class UserDetailsBedrijfComponent implements OnInit {
  private routeSub: Subscription;
  studentID: 0;
  userID:0;
  studentModel: Student;
  userModel: User;
  reviewsStudent: Review[];
  constructor(private router: Router,
    private route: ActivatedRoute, 
    private assignService: AssignmentService,
    private userService: UserService,
    private reviewService: ReviewService) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      this.userID = params['id']
      this.userService.getUser(this.userID).subscribe(
        result => {
          this.userModel = result;
          this.userService.getStudent(this.userModel.studentID).subscribe(
            result =>{
              this.studentModel = result;
              console.log(this.studentModel);
              this.reviewService.getReviewsFromUser(this.userModel.userID).subscribe(
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

}
