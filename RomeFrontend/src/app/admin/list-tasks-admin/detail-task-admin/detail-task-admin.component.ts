import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Company } from 'src/app/models/company.model';
import { Tag } from 'src/app/models/tag.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-detail-task-admin',
  templateUrl: './detail-task-admin.component.html',
  styleUrls: ['./detail-task-admin.component.css']
})
export class DetailTaskAdminComponent implements OnInit {
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
    this.route.queryParams.subscribe(param => {
      this.assignmentId = param["assignmentId"];
   

      assignService.getAssignement(this.assignmentId).subscribe(result => {
        this.assignment = result;
        

        companyService.getCompany(this.assignment.companyID).subscribe(result => {
          this.company = result;
          console.log(this.company.companyname);
        });
      });

      assignService.getApprovedUsersAmount(this.assignmentId).subscribe(result => {
        this.approvedUserAmount = result;
     
      });
      assignService.getTags(this.assignmentId).subscribe(result => {
        this.tags = result;
       console.log(this.tags);
      });
     
    });
  }
  onSubmit(){
    console.log(this.assignment);
    this.assignService.updateAssignment(this.assignment).subscribe();
  }

  ngOnInit() {
  }

}
