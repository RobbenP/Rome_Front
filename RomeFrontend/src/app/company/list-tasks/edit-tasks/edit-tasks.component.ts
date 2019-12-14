import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { TagService } from "src/app/services/tag.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Tag } from "src/app/models/tag.model";
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Assignmenttag } from 'src/app/models/assignmenttag.model';
import { AssignmenttagService } from 'src/app/services/assignmenttag.service'
@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  submitted: boolean = false;
  tags: Tag[];
  keuzeTags: Tag[];
  assignmentModel : Assignment;
  assignmentTag: Assignmenttag;
  tagID: number;
  keuzeTagID: number;
assignmenttag1: Assignmenttag = new Assignmenttag(0, 0, 0);
  users : User[];
  acceptedUsers: User[];
  private routeSub: Subscription;
  AssignmentID = 0

  companyID = 0
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private companyService: CompanyService,
    private tagService: TagService,
    private assignmentTagSevice: AssignmenttagService
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
          this.assignService.getAcceptedAssignmentsBedrijfGebruikers(this.assignmentModel.assignmentID).subscribe(
            r => {
              this.acceptedUsers = r;
            }
          )
         } 
        )
      });
  }
  kiesTag() {
    console.log(this.keuzeTagID);
    console.log(this.AssignmentID);
   this.assignmenttag1.assignmentID = this.AssignmentID;
   this.assignmenttag1.tagID = this.keuzeTagID;
   this.assignmenttag1.assignmentTagID = 0;
   console.log(this.assignmenttag1);
    this.assignService.addAssignmentTag(this.assignmenttag1).subscribe(
      r=>{window.location.reload();
      });
  
  }
  getTags() {
    this.assignService.getTags(this.AssignmentID).subscribe(
      result => {
        this.tags = result
       
       
        
      }
    );
    this.assignService.getAllTags().subscribe(
      result => {
        this.keuzeTags = result;
      }
    )
  }  
  Aanvaarden(assignmentID: number, userID: number){
    this.assignService.updateBedrijfAcceptedUserAssignment(assignmentID, userID).subscribe();

  }
  Weigeren(assignmentID: number, userID: number){
    this.assignService.deleteBedrijfAcceptedUserAssignment(assignmentID, userID).subscribe();
    window.location.reload();
  }

};