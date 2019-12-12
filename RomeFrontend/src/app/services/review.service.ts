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
    return this.http.post("https://localhost:5001/api/Reviews", review);
  }

  getReviewsFromUser(userid:number):Observable<Review[]>{
    return this.http.get<Review[]>("https://localhost:5001/api/Reviews/from/"+userid)
  }

  getReviewsAboutUser(userid:number):Observable<Review[]>{
    return this.http.get<Review[]>("https://localhost:5001/api/Reviews/about/"+userid)

  }
}