import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Assignment } from "../models/assignment.model";
import { Tag } from "../models/tag.model";
import { Review } from "../models/review.model";
import { User } from '../models/user.model';
import { UserAssignments } from '../models/user-assignments.model';

@Injectable({
  providedIn: "root"
})
export class AssignmentService {
  constructor(private http: HttpClient) {}

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(
      "https://localhost:5001/api/Assignments"
    );
  }
  updateAssignment(assignment: Assignment) {
    return this.http.put(
      "https://localhost:5001/api/Assignments/" +
        assignment.assignmentID.toString(),
      assignment
    );
  }
  addAssignement(assignment: Assignment) {
    return this.http.post("https://localhost:5001/api/Assignments", assignment);
  }
  getAssignement(assignId: number): Observable<Assignment> {
    return this.http.get<Assignment>(
      "https://localhost:5001/api/Assignments/" + assignId
    );
  }

  getApprovedUsersAmount(assignId: number): Observable<number> {
    return this.http.get<number>(
      "https://localhost:5001/api/Assignments/makersAmount/" + assignId
    );
  }
  getTags(assignId: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(
      "https://localhost:5001/api/Assignments/tags/" + assignId
    );
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>("https://localhost:5001/api/Tags");
  }
  updateTags(assignId: number, tags: Tag[]) {
    return this.http.put(
      "https://localhost:5001/api/AssignmentTags/updateTags/" + assignId, tags
    );
  }
  getReviews(assignId: number): Observable<Review[]> {
    return this.http.get<Review[]>(
      "https://localhost:5001/api/Assignments/reviews/" + assignId
    );
  }

  getAssignmentsByCompanyID(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(
      "https://localhost:5001/api/assignments/bedrijf/" + id
    );
  }

  userAcceptAssignmentByAssignmentID(assignId: number) {
    
    return this.http.get(
      "https://localhost:5001/api/Assignments/studentAccepts/" + assignId
    ).subscribe(r=>{
      console.log("Als ik hier niets extra doe, doet hij geen request");
    });
  }
  hasUserAcceptedAssignment(assignId:number):Observable<boolean>{
    return this.http.get<boolean>("https://localhost:5001/api/UserAssignments/hasUserAccepted/"+assignId);
  }

  getPendingAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>("https://localhost:5001/api/Assignments/pending/")
  }
  getPendingAssignmentsBedrijfGebruikers(assignmentID: number):Observable<User[]>{
    return this.http.get<User[]>("https://localhost:5001/api/UserAssignments/pendingBedrijfGebruikers/" +assignmentID)
  }

  updateBedrijfAcceptedUserAssignment(assignmentID: number, userID: number)
  {
    return this.http.put("https://localhost:5001/api/UserAssignments/Bedrijf/Acceptatie/" + assignmentID  +"/" + userID, userID);
  }
  deleteBedrijfAcceptedUserAssignment(assignmentID: number, userID: number)
  {
    return this.http.delete("https://localhost:5001/api/UserAssignments/Bedrijf/Weigering/" + assignmentID  +"/" + userID);
  }

  getPendingAssignmentsBedrijf():Observable<UserAssignments[]>{
    return this.http.get<UserAssignments[]>("https://localhost:5001/api/UserAssignments/pendingBedrijf/")
  }
  getAcceptedAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>("https://localhost:5001/api/Assignments/accepted/")
  }

  deleteAssignment(id: number): Observable<Assignment[]> {
    return this.http.delete<Assignment[]>("https://localhost:5001/api/Assignments/" + id
    );
  }
}
