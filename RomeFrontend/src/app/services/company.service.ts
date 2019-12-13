import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "../models/company.model";
import { Location } from '@angular/common';

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
  updateCompany(company: Company) {
    return this.http.put(
      "https://localhost:5001/api/Companies/" +
        company.companyID.toString(),
      company
    );
  }
  getLocationsForCompany(companyID: number): Observable<Location[]>{
    return this.http.get<Location[]>(
      "https://localhost:5001/api/locations/Bedrijf/" +
      companyID
    );
  }
  updateLocations(companyID: number, locations: Location[]) {
    return this.http.put(
      "https://localhost:5001/api/Locations/updateLocations/" + companyID, locations
    );
  }
}
