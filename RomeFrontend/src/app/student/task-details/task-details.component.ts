import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Tag } from "src/app/models/tag.model";
import { Review } from "src/app/models/review.model";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"]
})
export class TaskDetailsComponent implements OnInit {
  assignmentId: number;
  assignment: Assignment;
  approvedUserAmount: number;
  company: Company;
  tags: Tag[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private companyService: CompanyService
  ) {
    localStorage.setItem("refreshed", "1");
    this.route.queryParams.subscribe(p => {
      this.assignmentId = p["assignmentId"];
      //console.log(p["assignmentId"]);

      assignService.getAssignement(this.assignmentId).subscribe(r => {
        this.assignment = r;
        console.log(r);

        companyService.getCompany(this.assignment.companyID).subscribe(r => {
          this.company = r;
          console.log(r);
        });
      });

      assignService.getApprovedUsersAmount(this.assignmentId).subscribe(r => {
        this.approvedUserAmount = r;
        //console.log(r);
      });
      assignService.getTags(this.assignmentId).subscribe(r => {
        this.tags = r;
        //console.log(r);
      });
     
    });
  }

  ngOnInit() {}
}
