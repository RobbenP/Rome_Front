import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Review } from "../models/review.model";

@Injectable({
  providedIn: "root"
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getReview(id: number): Observable<Review> {
    return this.http.get<Review>("https://localhost:5001/api/Reviews/" + id);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>("https://localhost:5001/api/Reviews");
  }

  addReview(review: Review) {
    console.log(review);
    return this.http.post("https://localhost:5001/api/Reviews", review);
  }
  updateReview(review: Review) {
    return this.http.put(
      "https://localhost:5001/api/Reviews/" + review.reviewID,
      review
    );
  }
  deleteReview(reviewID: number){
    return this.http.delete("https://localhost:5001/api/Reviews/" + reviewID);
  }
  getReviewsFromUser(userid: number): Observable<Review[]> {
    return this.http.get<Review[]>(
      "https://localhost:5001/api/Reviews/from/" + userid
    );
  }

  getReviewsAboutUser(userid: number): Observable<Review[]> {
    return this.http.get<Review[]>(
      "https://localhost:5001/api/Reviews/about/" + userid
    );
  }
  async getReviewsAboutUserAsync(userid: number): Promise<Review[]> {
    return this.http.get<Review[]>(
      "https://localhost:5001/api/Reviews/about/" + userid
    ).toPromise();
  }
}
