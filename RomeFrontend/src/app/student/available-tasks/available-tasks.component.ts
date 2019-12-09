import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AssignmentService } from "src/app/services/assignment.service";
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: ["./available-tasks.component.css"]
})
export class AvailableTasksComponent implements OnInit {
  allAssignements:Observable<Assignment[]>;
  constructor(
    private router: Router,
    private assignmentService: AssignmentService
  ) {
    this.allAssignements=assignmentService.getAssignments();
  }

  details(assignmentId: number) {
    let navExtras: NavigationExtras = {
      queryParams: {
        assignmentId: assignmentId
      }
    };
    this.router.navigate(["/detailsAssignement"], navExtras);
  }

  signup(assignmentId: number) {
    
  }

  ngOnInit() {}
}
