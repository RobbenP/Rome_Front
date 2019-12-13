import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Assignment } from "../models/assignment.model";
import { Tag } from "../models/tag.model";
import { Review } from "../models/review.model";
import { User } from '../models/user.model';
import { UserAssignments } from '../models/user-assignments.model';
import { Assignmenttag } from '../models/assignmenttag.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmenttagService {

  constructor(private http: HttpClient) { }

  addAssignementTag(assignmenttag: Assignmenttag) {
    return this.http.post("https://localhost:5001/api/AssignmentTags", assignmenttag);
  }
}
