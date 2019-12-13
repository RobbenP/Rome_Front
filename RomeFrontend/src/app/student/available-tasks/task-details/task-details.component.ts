import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Assignment } from "src/app/models/assignment.model";
import { AssignmentService } from "src/app/services/assignment.service";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company.model";
import { Tag } from "src/app/models/tag.model";
import { Review } from "src/app/models/review.model";
import { UserAssignments } from "src/app/models/user-assignments.model";
import { UserAssignmentService } from "src/app/services/user-assignment.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"]
})
export class TaskDetailsComponent implements OnInit {
  assignmentId: number;
  assignment: Assignment;
  approvedUserAmount: number;
  canSignup: boolean = true;
  company: Company;
  tags: Tag[];
  hue: number;
  percentage: number = 20;
  userAssignment: UserAssignments;
  accepted: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private assignService: AssignmentService,
    private companyService: CompanyService,
    private uaService: UserAssignmentService
  ) {
    this.route.queryParams.subscribe(p => {
      this.assignmentId = p["assignmentId"];
      //console.log(p["assignmentId"]);

      assignService.getAssignement(this.assignmentId).subscribe(r => {
        this.assignment = r;
        console.log(r);

        companyService.getCompany(this.assignment.companyID).subscribe(r => {
          this.company = r;
          console.log(r);
        });
      });

      assignService
        .hasUserAcceptedAssignment(this.assignmentId)
        .subscribe(r => {
          if (r) {
            uaService
              .getUserAssignementByAssignmentofLoggedInUser(this.assignmentId)
              .subscribe(r => {
                this.userAssignment = r;
                this.accepted = r.status;
                this.percentage = r.progress;
              });
          }
        });

      assignService.getApprovedUsersAmount(this.assignmentId).subscribe(r => {
        this.approvedUserAmount = r;
        var inverse: number = 1 - r / this.assignment.quantityUsers;
        this.hue = inverse * 120;
        if (inverse === 1) this.canSignup = false;
        //console.log(r);
      });
      assignService.getTags(this.assignmentId).subscribe(r => {
        this.tags = r;
        //console.log(r);
      });
    });
  }
  getHue() {
    console.log("getHue wordt opgeroepen");
    console.log(this.hue);
    //return this.hue;
    return this.getHueWithValue(this.hue);
  }
  getHueWithValue(hueLevel: number) {
    return TaskDetailsComponent.hslToHex(hueLevel, 100, 50);
  }
  signup() {
    this.assignService.userAcceptAssignmentByAssignmentID(this.assignmentId);
  }
  saveProgress() {
    this.userAssignment.progress = this.percentage;
    console.log(this.userAssignment);

    this.uaService.updateUserAssignment(this.userAssignment).subscribe();
  }
  goReview() {
    this.router.navigateByUrl(
      "/review/" + this.assignmentId + "/" + localStorage.getItem("userID")
    );
  }
  
  public static hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  ngOnInit() {}
}
