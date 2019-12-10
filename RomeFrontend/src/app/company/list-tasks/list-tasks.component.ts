import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service'
import { Assignment } from '../../models/assignment.model'
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  assigments:Assignment[];

  constructor(private _assignmentService:AssignmentService,private router: Router) { }

  ngOnInit() {
    this.getAssignments();
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
