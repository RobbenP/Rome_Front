import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { User } from '../models/user.model';
import { Student } from '../models/student.model';
import { Locaties } from '../models/location.model';
import { Company } from '../models/company.model';
import { UserService } from '../services/user.service';
import { CompanyService } from '../services/company.service';
import { Tag } from '../models/tag.model';
import { AssignmentService } from '../services/assignment.service';

@Injectable({
  providedIn: 'root'
})
export class OneUserResolverService implements Resolve<Observable<[User, Tag[]]>>  {
  constructor(private userService: UserService, private assService: AssignmentService ) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<[User, Tag[]]> {
    const userid = route.params["id"];
    return forkJoin([
      this.userService.getUser(userid),
      this.assService.getAllTags()
    ]);
  
    
   
  }
}