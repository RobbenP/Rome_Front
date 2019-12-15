import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../../models/assignment.model';
import { AssignmentService } from '../../../services/assignment.service';
import {Router} from "@angular/router";
import { Tag } from 'src/app/models/tag.model';
import { Observable } from 'rxjs';
import { of} from 'rxjs';
import { Assignmenttag } from 'src/app/models/assignmenttag.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  assignment : Assignment[];
  submitted : boolean = false;
  assignmentModel : Assignment = new Assignment(0,"","","",1,true, parseInt(localStorage.getItem("companyID")))
 
  constructor(private _assignmentService: AssignmentService, private router: Router, private location: Location) { }

  ngOnInit() {
    
    
  }
 
 
  onSubmit() {

    this.submitted = true;

    console.log(this.assignmentModel)
    this._assignmentService.addAssignement(this.assignmentModel).subscribe( result => {
      this.router.navigate(['/bedrijf/takenlijst'])
    });
  }
  back(){
    this.location.back();
  }
} 
 