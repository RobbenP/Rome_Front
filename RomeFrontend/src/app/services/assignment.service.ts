import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http:HttpClient) { }

  getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>("https://localhost:5001/api/Assignments")
  }

  addAssignement(assignment:Assignment){
    return this.http.post("https://localhost:5001/api/Assignments", assignment)
  }

  getAssignmentsByCompanyID(id:number):Observable<Assignment[]>{
    return this.http.get<Assignment[]>("https://localhost:5001/api/assignments/bedrijf/" + id)
  }

}
