import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-admin-review',
  templateUrl: './user-admin-review.component.html',
  styleUrls: ['./user-admin-review.component.css']
})
export class UserAdminReviewComponent implements OnInit {
reviewFromModel: Review[];
reviewAboutModel: Review[];
userID:0;
private routeSub: Subscription;
  constructor(private router: Router,
    private route: ActivatedRoute, 
    private reviewService: ReviewService,
    private location: Location) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      this.userID = params['id']})
    this.reviewService.getReviewsFromUser(this.userID).subscribe(
      result => {
        this.reviewFromModel = result;
      }
      
    )
    this.reviewService.getReviewsAboutUser(this.userID).subscribe(
      result => {
        this.reviewAboutModel = result;
      }
    )
  }

}
