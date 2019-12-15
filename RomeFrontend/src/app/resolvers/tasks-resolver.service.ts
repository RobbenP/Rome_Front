import { Injectable } from "@angular/core";
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Assignment } from "../models/assignment.model";
import { AssignmentService } from "../services/assignment.service";
import { TaskDetailsComponent } from "../student/available-tasks/task-details/task-details.component";
import { async } from "q";
import { TestBed } from "@angular/core/testing";

@Injectable({
  providedIn: "root"
})
export class TasksResolverService implements Resolve<Assignment[]> {
  constructor(private assService: AssignmentService) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Assignment[]> {
    let assignments: Assignment[] = await this.assService.getAssignmentsAsync();
    
    assignments.forEach(
      async function(assign) {
        assign["used"] = await this.assService.getApprovedUsersAmountAsync(
          assign.assignmentID
        );
        assign["color"] = TaskDetailsComponent.hslToHex(
          (1 - assign["used"] / assign.quantityUsers) * 120,
          100,
          50
        );
        assign[
          "hasAccepted"
        ] = await this.assService.hasUserAcceptedAssignmentAsync(
          assign.assignmentID
        );
        assign["tags"] = await this.assService.getTagsAsync(assign.assignmentID);
      }.bind(this)
    );
    console.log("Einde resolver");

    return assignments;
  }
}
