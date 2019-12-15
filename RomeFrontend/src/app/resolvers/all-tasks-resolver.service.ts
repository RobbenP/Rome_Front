import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { AssignmentService } from '../services/assignment.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllTasksResolverService implements Resolve<Observable<Assignment[]>>{

  constructor(private assService:AssignmentService) { } 

  resolve(){
    return this.assService.getAssignments();;
  }
}