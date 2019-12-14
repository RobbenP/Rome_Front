import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AssignmentService } from "src/app/services/assignment.service";
import { Observable } from "rxjs";
import { Assignment } from "src/app/models/assignment.model";
import { TaskDetailsComponent } from "./task-details/task-details.component";

@Component({
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: ["./available-tasks.component.css"]
})
export class AvailableTasksComponent implements OnInit {
  //allAssignements: Observable<Assignment[]>;

  allAssignements: Assignment[];
  welkeOpdrachten: string = 'alle';
  constructor(
    private router: Router,
    private assignmentService: AssignmentService
  ) {
    //this.allAssignements = assignmentService.getAssignments();
    assignmentService.getAssignments().subscribe(r => {
      this.setAssignments(r, assignmentService);
    });
  }

  private setAssignments(r: Assignment[], assignmentService: AssignmentService) {
    this.allAssignements = r;
    this.allAssignements.forEach(function (assign) {
      TaskDetailsComponent.hslToHex;
      assign["used"] = assignmentService.getApprovedUsersAmount(assign.assignmentID);
      assign["used"].subscribe(r => {
        assign["color"] = TaskDetailsComponent.hslToHex((1 - r * assign.quantityUsers) * 120, 100, 50);
      });
      assignmentService
        .hasUserAcceptedAssignment(assign.assignmentID)
        .subscribe(r => {
          assign["hasAccepted"] = r;
        });
    });
    console.log(r);
  }

  details(assignmentId: number) {


    this.router.navigate(["student/detailsTaak/" + assignmentId]);
  }
  signup(assignmentId: number) {
    this.assignmentService.userAcceptAssignmentByAssignmentID(assignmentId);
  }

  delete(assignmentId: number) { }

  allTasks() {
    this.welkeOpdrachten = 'alle'
    this.assignmentService.getAssignments().subscribe(r => {
      this.setAssignments(r, this.assignmentService);
    });

  }
  pendingTasks() {

    this.welkeOpdrachten = 'pending';
    this.assignmentService.getPendingAssignments().subscribe(r => {
      this.setAssignments(r, this.assignmentService);
    })

  }
  acceptedTasks() {
    this.welkeOpdrachten = 'accepted';
    this.assignmentService.getAcceptedAssignments().subscribe(r => {
      this.setAssignments(r, this.assignmentService);
    })

  }

  str: string;
  assignment: any;

  filterAssignments() { 
    this.assignment = this.str;
  }

  ngOnInit() { }
}
