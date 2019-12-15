import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, forkJoin } from "rxjs";
import { Assignment } from "../models/assignment.model";
import { Tag } from "../models/tag.model";
import { AssignmentService } from "../services/assignment.service";

@Injectable({
  providedIn: "root"
})
export class OneTaskResolverService
  implements Resolve<Observable<[Assignment, number, Tag[], Tag[]]>> {
  constructor(private assService: AssignmentService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<[Assignment, number, Tag[], Tag[]]> {
    const assignId = route.params["id"];
    return forkJoin([
      this.assService.getAssignement(assignId),
      this.assService.getApprovedUsersAmount(assignId),
      this.assService.getTags(assignId),
      this.assService.getAllTags()
    ]);
  }
}
