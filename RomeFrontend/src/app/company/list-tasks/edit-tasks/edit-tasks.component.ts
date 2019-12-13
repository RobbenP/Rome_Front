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
  assignmentTagModel: Assignmenttag;
 
  tagID: number;
  keuzeTagID: number;

  users : User[];
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
         } 
        )
      });
  }

  kiesTag() {
    this.assignmentTagModel.assignmentID = this.AssignmentID;
    this.assignmentTagModel.tagID = this.keuzeTagID;
    this.assignmentTagSevice.addAssignementTag(this.assignmentTagModel).subscribe( result => {
      this.router.navigate(['/bedrijf/takenlijst/taakWijzigen/' + this.AssignmentID])
    });
  }

  getTags() {
    this.assignService.getTags(this.AssignmentID).subscribe(
      result => {
        this.tags = result
        this.tagID = result[0].tagID
        this.tagService.getTags().subscribe(
          result => {
            this.keuzeTags = result
            for (let keuzeTag of this.keuzeTags) {
              if (this.tags.includes(keuzeTag, 0)){
                console.log("YAYAYAYYAYAYYAYYAYAAYYAYA")
                delete this.keuzeTags[keuzeTag.tagID]
              }
            }
            if (!this.tags.includes(result[0])){
              this.keuzeTagID = result[0].tagID
            }
          }
        )
      }
    );
  }  

  Aanvaarden(assignmentID: number, userID: number){
    this.assignService.updateBedrijfAcceptedUserAssignment(assignmentID, userID).subscribe();
    
  }
};


