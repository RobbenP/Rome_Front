import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AssignmentService } from "src/app/services/assignment.service";
import { Observable } from "rxjs";
import { Assignment } from "src/app/models/assignment.model";

@Component({
  selector: "app-tasks-applied",
  templateUrl: "./tasks-applied.component.html",
  styleUrls: ["./tasks-applied.component.css"]
})
export class TasksAppliedComponent implements OnInit {
  //allAssignements: Observable<Assignment[]>;
  
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

    this.router.navigate(["student/detailsTaak"], navExtras);
  }

  delete(assignmentId: number) {
    
  }

  ngOnInit() {
    
  }
}