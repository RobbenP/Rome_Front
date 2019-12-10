import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
assignmentId:number;
assignment: Assignment;
  constructor(private router:Router, private route:ActivatedRoute, private assignService: AssignmentService) {
    this.route.queryParams.subscribe(p => {
      this.assignmentId = p["assignmentId"];
    });
    assignService.getAssignement(this.assignmentId).subscribe(r=>{
      this.assignment=r;
    });
   }

  ngOnInit() {
  }

}
