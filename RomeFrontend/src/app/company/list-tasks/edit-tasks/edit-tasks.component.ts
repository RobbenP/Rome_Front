import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Tag } from "src/app/models/tag.model";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  assignment: Assignment[];
  company: Company[];
  approvedUserAmount: number;
  tags: Tag[];

  private routeSub: Subscription;
  AssignmentID = 0
  Naam = ""
  Omschrijving = ""
  Locatie = ""
  QuantityUsers = ""
  Status = ""
  companyID = 0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      this.AssignmentID = params['id']

    });

    this.getAssignment();
    this.getCompany();
    this.getApprovedUserAmount();
    this.getTags();
    console.log(this.assignment)
    console.log(this.company)
    console.log(this.approvedUserAmount)
    console.log(this.tags)
  }

  getAssignment() {
    this.assignService.getAssignement(this.AssignmentID).subscribe
      ((data: any) => {
        this.assignment = data;
        this.assignment = data.Naam
        this.assignment = data.Omschrijving
        this.assignment = data.Locatie
        this.assignment = data.QuantityUsers
        this.assignment = data.Status
        this.assignment = data.companyID
      });
  }

  getCompany() {
    this.companyService.getCompany(this.companyID).subscribe
      ((data: any) => {
        this.company = data;
        this.company = data.companyID
        this.company = data.companyName
        this.company = data.phoneNumber
        this.company = data.website
        this.company = data.biography
      });
  }

  getApprovedUserAmount() {
    this.assignService.getApprovedUsersAmount(this.AssignmentID).subscribe((
      data: number) => {
      this.approvedUserAmount = data;
      console.log(this.approvedUserAmount)
    }
    )
  }

  getTags() {
    this.assignService.getTags(this.AssignmentID).subscribe(
      result => {
        this.tags = result


        console.log(this.tags);
      }
    );
  }
};

