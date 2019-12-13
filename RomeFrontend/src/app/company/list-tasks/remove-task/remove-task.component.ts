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
  selector: 'app-remove-task',
  templateUrl: './remove-task.component.html',
  styleUrls: ['./remove-task.component.css']
})
export class RemoveTaskComponent implements OnInit {

private routeSub: Subscription;
AssignmentID = 0
assignmentModel : Assignment;
submitted: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private _assignService: AssignmentService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      this.AssignmentID = params['id']

    });

    this.getAssignment();
  }

  onSubmit() {

    this.submitted = true;
    this.assignmentModel.assignmentID = this.AssignmentID

    this._assignService.deleteAssignment(this.assignmentModel.assignmentID).subscribe( result => {
      this.router.navigate(['/bedrijf/takenlijst'])
    });
  }

  getAssignment() {
    this._assignService.getAssignement(this.AssignmentID).subscribe
      (data => {
        this.assignmentModel = data;
      });
  }

}
