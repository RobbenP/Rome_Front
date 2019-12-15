import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, forkJoin } from "rxjs";
import { Assignment } from "../models/assignment.model";
import { Tag } from "../models/tag.model";
import { AssignmentService } from "../services/assignment.service";
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';

@Injectable({
  providedIn: "root"
})
export class OneTaskResolverService
  implements Resolve<Observable<[Assignment, number, Tag[], Tag[], Company]>> {

    assignment: Assignment;
  constructor(private assService: AssignmentService, private companyService: CompanyService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<[Assignment, number, Tag[], Tag[], Company]> {
    const assignId = route.params["id"];
    const companyId = route.params["companyId"];
    return forkJoin([
      this.assService.getAssignement(assignId),
      this.assService.getApprovedUsersAmount(assignId),
      this.assService.getTags(assignId),
      this.assService.getAllTags(),
      this.companyService.getCompany(companyId)
    ]);
  }
}
