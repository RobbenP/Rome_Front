import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Tag } from '../models/tag.model';
import { Review } from '../models/review.model';
import { Student } from '../models/student.model';
import { Company } from '../models/company.model';
import { promise } from 'protractor';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      "https://localhost:5001/api/Users"
    );
  }
  getUser(userId:number): Observable<User> {
    return this.http.get<User>(
      "https://localhost:5001/api/Users/"+userId
    );
  }
  async getUserAsync(userId:number):Promise<User>{
    return await this.http.get<User>("https://localhost:5001/api/Users/"+userId).toPromise();
  }
  getCompany(companyID: number): Observable<User> {
    return this.http.get<User>(
      "https://localhost:5001/api/Users/Bedrijf/"+companyID
    );
  }
  async getCompanyAsync(companyID: number): Promise<User> {
    return this.http.get<User>(
      "https://localhost:5001/api/Users/Bedrijf/"+companyID
    ).toPromise();
  }
  getBedrijf(companyID: number): Observable<Company>{
    return this.http.get<Company>(
      "https://localhost:5001/api/Companies/"+companyID
    );
  }
  getStudent(studentID: number): Observable<Student>{
    return this.http.get<Student>("https://localhost:5001/api/Students/"+studentID);
  }
  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(
      "https://localhost:5001/api/Users/" + id
    );
  }
  updateUser(user: User) {
    return this.http.put<User>(
      "https://localhost:5001/api/Users/" +
        user.userID.toString(),
      user
    );
  }
  updateUserGegevens(user: User){
    return this.http.put("https://localhost:5001/api/Users/Gegevens/" + user.userID, user);
  }
  updateStudent(student: Student) {
    return this.http.put(
      "https://localhost:5001/api/Students/" +
        student.studentID.toString(),
      student
    );
  }
}
