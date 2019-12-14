import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserAssignments } from "../models/user-assignments.model";

@Injectable({
  providedIn: "root"
})
export class UserAssignmentService {
  constructor(private http: HttpClient) {}

  getUserAssignement(uaID: number): Observable<UserAssignments> {
    return this.http.get<UserAssignments>(
      "https://localhost:5001/UserAssignments/" + uaID
    );
  }

  getUserAssignementByAssignmentofLoggedInUser(
    assingmentID: number
  ): Observable<UserAssignments> {
    return this.http.get<UserAssignments>(
      "https://localhost:5001/api/UserAssignments/assignment/" + assingmentID
    );
  }

  async getUserAssignementByAssignmentofLoggedInUserAsync(
    assingmentID: number
  ): Promise<UserAssignments> {
    return this.http.get<UserAssignments>(
      "https://localhost:5001/api/UserAssignments/assignment/" + assingmentID
    ).toPromise();
  }

  updateUserAssignment(uassignment: UserAssignments) {
    console.log("kom ik hier?");

    return this.http.put(
      "https://localhost:5001/api/UserAssignments/" +
        uassignment.userAssignmentID.toString(),
      uassignment
    );
  }
}
