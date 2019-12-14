import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Assignment } from "../models/assignment.model";
import { Company } from "../models/company.model";
import { Tag } from "../models/tag.model";
import { UserAssignments } from "../models/user-assignments.model";
import { AssignmentService } from "../services/assignment.service";
import { UserAssignmentService } from "../services/user-assignment.service";
import { CompanyService } from "../services/company.service";

@Injectable({
  providedIn: "root"
})
export class DetailTaskResolverService
  implements Resolve<[Assignment, number, Company, Tag[], UserAssignments]> {
  constructor(
    private assignService: AssignmentService,
    private uaService: UserAssignmentService,
    private companyService: CompanyService
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<[Assignment, number, Company, Tag[], UserAssignments]> {
    const assignId = route.params["id"];
    let assign: Assignment = await this.assignService.getAssignementAsync(
      assignId
    );

    let hasAccepted: boolean = await this.assignService.hasUserAcceptedAssignmentAsync(
      assignId
    );
    let ua: UserAssignments;
    if (hasAccepted) {
      ua = await this.uaService.getUserAssignementByAssignmentofLoggedInUserAsync(
        assignId
      );
    }
    let approvedAmount: number = await this.assignService.getApprovedUsersAmountAsync(
      assignId
    );
    let tags: Tag[] = await this.assignService.getTagsAsync(assignId);
    let company = await this.companyService.getCompanyAsync(assign.companyID);
    return [assign, approvedAmount, company, tags, ua];
  }
}
