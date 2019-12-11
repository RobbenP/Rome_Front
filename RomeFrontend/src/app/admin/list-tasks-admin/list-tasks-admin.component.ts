import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Router, NavigationExtras } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: 'app-list-tasks-admin',
  templateUrl: './list-tasks-admin.component.html',
  styleUrls: ['./list-tasks-admin.component.css']
})
export class ListTasksAdminComponent implements OnInit {

  constructor(private _assignmentService:AssignmentService,private router: Router) { }

  assigments:Assignment[];

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments(){
    this._assignmentService.getAssignments().subscribe(
      result => {
      this.assigments=result;
      console.log(this.assigments);
      }
    );
  }
  details(assignmentId: number) {
    let navExtras: NavigationExtras = {
      queryParams: {
        assignmentId: assignmentId
      }
    };

    this.router.navigate(["admin/takenlijst/detailtaak"], navExtras);
  }
  delete(assignmentid: number){
    this._assignmentService.deleteAssignment(assignmentid);
    this.getAssignments();
  }

}
