import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot
} from "@angular/router";
import { User } from "../models/user.model";
import { Company } from "../models/company.model";
import { Review } from "../models/review.model";
import { CompanyService } from "../services/company.service";
import { UserService } from "../services/user.service";
import { ReviewService } from "../services/review.service";
import { Observable, forkJoin } from "rxjs";
import { withLatestFrom } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InfoBedrijfResolverService
  implements Resolve<[User, Company, Review[]]> {
  constructor(
    private companyService: CompanyService,
    private userService: UserService,
    private reviewService: ReviewService
  ) {}

  // resolve(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<[User, Company, Review[]]> {
  //   console.log("We zitten in de resolver!");

  //   const userId = route.params["id"];
  //   let user: Observable<User>;
  //   let company: Observable<Company>;
  //   let reviews: Observable<Review[]>;
  //   user = this.userService.getUser(userId);
  //   user.subscribe(r => {
  //     company = this.companyService.getCompany(r.companyID);
  //   });
  //   reviews = this.reviewService.getReviewsAboutUser(userId);
  //   let test = forkJoin([user, company, reviews]);

  //   return test;
  // }

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<[User, Company, Review[]]> {
    const companyId = route.params["id"];

    console.log("User id =", companyId);

    let user: User = await this.userService.getCompanyAsync(companyId);
    console.log(user);
    
    let company: Company= await this.companyService.getCompanyAsync(user.companyID);
    let reviews: Review[] = await this.reviewService.getReviewsAboutUserAsync(user.userID);
    
    console.log([user, company, reviews]);
    
    return [user, company, reviews];
  }
}
