import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Userlogin } from '../models/userlogin.model';
import { Role } from '../models/role.model';
import { Company } from '../models/company.model';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  isLoggedin = new BehaviorSubject(false);

  constructor(private _httpClient: HttpClient) { }
  authenticate(userlogin: Userlogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userlogin);
  }
  getRoles():Observable<Role[]>{
    return this._httpClient.get<Role[]>("https://localhost:5001/api/Roles");
  }
  addUser(user:User){
    return this._httpClient.post("https://localhost:5001/api/Users", user);
  }
  addCompany(company:Company){
    return this._httpClient.post<Company>("https://localhost:5001/api/Companies", company);
  }
  addStudent(student:Student){
    return this._httpClient.post<Student>("https://localhost:5001/api/Students", student);
  }
  getUser(id: number):Observable<User> {
    return this._httpClient.get<User>("https://localhost:5001/api/Users/"+ id);
  }
  updateUser(user: User){
    return this._httpClient.put("https://localhost:5001/api/Users/" + user.userID, user);
  }
 
}
