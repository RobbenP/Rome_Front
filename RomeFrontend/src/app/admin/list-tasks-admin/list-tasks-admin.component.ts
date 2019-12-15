import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-tasks-admin',
  templateUrl: './list-tasks-admin.component.html',
  styleUrls: ['./list-tasks-admin.component.css']
})
export class ListTasksAdminComponent implements OnInit {

  constructor(private _assignmentService:AssignmentService,private router: Router, private location: Location, private route:ActivatedRoute) { }

  str: string;
  assignment: any;
  assigments:Assignment[];

  ngOnInit() {
    this.assigments=this.route.snapshot.data["tasks"];
  }

  filterAssignments() { 
    this.assignment = this.str;
  }

  getAssignments(){
    this._assignmentService.getAssignments().subscribe(
      result => {
      this.assigments=result;
      console.log(this.assigments);
      }
    );
  }
  details(assignmentId: number) {
    let navExtras: NavigationExtras = {
      queryParams: {
        assignmentId: assignmentId
      }
    };

    this.router.navigate(["admin/takenlijst/detailtaak"], navExtras);
  }
  delete(assignmentid: number){
    console.log(assignmentid);
    this._assignmentService.deleteAssignment(assignmentid).subscribe( result => {
      this.router.navigate(['/admin'])
    });
   // this.getAssignments();
  }

  back(){
    this.location.back();
  }

}
