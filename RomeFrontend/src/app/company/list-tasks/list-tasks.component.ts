import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service'
import { Assignment } from '../../models/assignment.model'
import { Router } from "@angular/router";
import { User } from 'src/app/models/user.model';
import { UserAssignments } from 'src/app/models/user-assignments.model';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  assigments:Assignment[];
  pendingAssignments:User[];
  userAssignments: UserAssignments[];
  constructor(private _assignmentService:AssignmentService,private router: Router) {
  
   
   }

  ngOnInit() {
    this.getAssignments();
    this._assignmentService.getPendingAssignmentsBedrijfGebruikers().subscribe(
      result => {
        this.pendingAssignments = result;
        console.log(this.pendingAssignments);
      }
    )
    this._assignmentService.getPendingAssignmentsBedrijf().subscribe(
      result => {
        this.userAssignments = result;
        console.log(this.userAssignments);
      }
    )
  }

  getAssignments(){
    this._assignmentService.getAssignmentsByCompanyID(parseInt(localStorage.getItem("companyID"))).subscribe(
      result => {
      this.assigments=result
      console.log(this.assigments);
      }
    );
  }

}
