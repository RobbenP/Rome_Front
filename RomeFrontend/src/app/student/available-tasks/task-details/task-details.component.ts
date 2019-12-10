import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"]
})
export class TaskDetailsComponent implements OnInit {
  assignmentId: number;
  assignment: Assignment;
  approvedUserAmount:number;
  company: Company;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private companyService: CompanyService
  ) {
    this.route.queryParams.subscribe(p => {
      this.assignmentId = p["assignmentId"];
    });

    assignService.getAssignement(this.assignmentId).subscribe(r => {
      this.assignment = r;
      
      companyService.getCompany(this.assignment.companyID).subscribe(r => {
        this.company = r;
      });
    });

    assignService.getApprovedUsersAmount(this.assignmentId).subscribe(r=>{
      this.approvedUserAmount = r;
    })
  }

  ngOnInit() {}
}
