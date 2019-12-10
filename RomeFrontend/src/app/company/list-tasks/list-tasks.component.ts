import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Router, NavigationExtras } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  allAssignements: Assignment[];
  constructor(
    private router: Router,
    private assignmentService: AssignmentService
  ) {
    //this.allAssignements = assignmentService.getAssignments();
    assignmentService.getAssignments().subscribe(r => {
      this.allAssignements = r;
      console.log(r);
    });
  }

  details(assignmentId: number) {
    let navExtras: NavigationExtras = {
      queryParams: {
        assignmentId: assignmentId
      }
    };
    this.router.navigate(["bedrijf/detailsTaak"], navExtras);
  }

  signup(assignmentId: number) {}

  ngOnInit() {
  }

}
