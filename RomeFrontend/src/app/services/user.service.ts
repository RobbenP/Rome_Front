import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Tag } from '../models/tag.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      "https://localhost:5001/api/Users"
    );
  }
  getUser(userId:number): Observable<User> {
    return this.http.get<User>(
      "https://localhost:5001/api/Users/"+userId
    );
  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(
      "https://localhost:5001/api/Users" + id
    );
  }
}
