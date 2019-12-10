import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../../models/assignment.model';
import { AssignmentService } from '../../../services/assignment.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  assignment : Assignment[];
  submitted : boolean = false;
  assignmentModel : Assignment = new Assignment(0,"","","",null,true)

  constructor(private _assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    this.submitted = true;

    console.log(this.assignmentModel)
    this._assignmentService.addAssignement(this.assignmentModel).subscribe( result => {
      this.router.navigate(['/mijntaken'])
    });
  }

}
