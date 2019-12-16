import { Component, OnInit } from "@angular/core";
import { Assignment } from "src/app/models/assignment.model";
import { Company } from "src/app/models/company.model";
import { Tag } from "src/app/models/tag.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-detail-task-admin",
  templateUrl: "./detail-task-admin.component.html",
  styleUrls: ["./detail-task-admin.component.css"]
})
export class DetailTaskAdminComponent implements OnInit {
  assignmentId: number;
  assignment: Assignment;
  approvedUserAmount: number;
  company: Company;
  tags: Tag[];
  allTags: Tag[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private companyService: CompanyService,
    private location: Location
  ) {
    this.assignment = route.snapshot.data["task"][0];
    this.assignmentId = this.assignment.assignmentID;
    this.approvedUserAmount = route.snapshot.data["task"][1];
    this.tags = route.snapshot.data["task"][2];
    this.allTags = route.snapshot.data["task"][3];
    
  }
  onSubmit() {
    this.assignService.updateAssignment(this.assignment).subscribe();
    console.log(this.tags);
    this.assignService.updateTags(this.assignmentId, this.tags).subscribe();
    //window.location.reload();
    this.router.navigate(["admin/takenLijst"]);
  }

  back() {
    this.router.navigateByUrl(
      "/"
    );
  }

  ngOnInit() { console.log(this.assignment)}
}