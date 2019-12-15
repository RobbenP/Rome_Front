import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "../models/company.model";
import { Location } from '@angular/common';
import { Locaties } from '../models/location.model';

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>("https://localhost:5001/api/Companies");
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>("https://localhost:5001/api/Companies/" + id);
  }
  async getCompanyAsync(id:number):Promise<Company>{
    return await this.http.get<Company>("https://localhost:5001/api/Companies/" + id).toPromise();
  }
  updateCompany(company: Company) {
    return this.http.put(
      "https://localhost:5001/api/Companies/" +
        company.companyID.toString(),
      company
    );
  }
  getLocationsForCompany(companyID: number): Observable<Locaties[]>{
    return this.http.get<Locaties[]>(
      "https://localhost:5001/api/locations/Bedrijf/" +
      companyID
    );
  }
  updateLocations(companyID: number, locations: Locaties[]) {
    return this.http.put(
      "https://localhost:5001/api/Locations/updateLocations/" + companyID, locations
    );
  }
  
}
