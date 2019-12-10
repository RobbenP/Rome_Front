import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Userlogin } from '../models/userlogin.model';
import { Role } from '../models/role.model';
import { Company } from '../models/company.model';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) { }
  authenticate(userlogin: Userlogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userlogin);
  }
  getRoles():Observable<Role[]>{
    return this._httpClient.get<Role[]>("https://localhost:5001/api/Roles")
  }
  addUser(user:User){
    return this._httpClient.post("https://localhost:5001/api/Users", user)
  }
  addCompany(company:Company){
    return this._httpClient.post("https://localhost:5001/api/Companies", company)
  }
  addStudent(student:Student){
    return this._httpClient.post("https://localhost:5001/api/Students", student)
  }
}
