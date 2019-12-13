import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Tag } from "src/app/models/tag.model";
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  submitted: boolean = false;
  tags: Tag[];
  assignmentModel : Assignment;
 

  users : User[];
  private routeSub: Subscription;
  AssignmentID = 0
 
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
    this.getTags();
    console.log("ID")
    console.log(this.AssignmentID)
    console.log("ID")

    
    
  }
  onSubmit() {

    this.submitted = true;
    this.assignmentModel.assignmentID = this.AssignmentID

    console.log(this.assignmentModel)
    this.assignService.updateAssignment(this.assignmentModel).subscribe( result => {
      this.router.navigate(['/bedrijf/takenlijst'])
    });
  }

  getAssignment() {
    this.assignService.getAssignement(this.AssignmentID).subscribe
      (data => {
        this.assignmentModel = data;
        this.assignService.getPendingAssignmentsBedrijfGebruikers(this.assignmentModel.assignmentID).subscribe(
         result =>{
          this.users = result;
         } 
        )
      });
  }

  getTags() {
    this.assignService.getTags(this.AssignmentID).subscribe(
      result => {
        this.tags = result
        console.log("TAG")
        console.log(this.tags)
        console.log("TAG")
      }
    );
  }

  Aanvaarden(assignmentID: number, userID: number){
    this.assignService.updateBedrijfAcceptedUserAssignment(assignmentID, userID).subscribe();
    
  }
};


