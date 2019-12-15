import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { Userlogin } from '../models/userlogin.model';
import { Role } from '../models/role.model';
import { Company } from '../models/company.model';
import { Student } from '../models/student.model';
import { Locaties} from '../models/location.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
 private isLoggedin = new BehaviorSubject(false);
 public isLoggedin$ = this.isLoggedin.asObservable();
  userID = new BehaviorSubject(0);
  roleID = new BehaviorSubject(0);
  
  constructor(private _httpClient: HttpClient) {
    const token = localStorage.getItem("token");
    
    this.isLoggedin.next(token ? true : false);
    const userId =localStorage.getItem("userID");
    this.userID.next(Number(userId));

    const roleId =localStorage.getItem("roleID");
    this.roleID.next(Number(roleId));
   }
 async authenticate(userlogin: Userlogin): Promise<User> {

    const result = await this._httpClient.post<User>("https://localhost:5001/api/User/authenticate", userlogin).toPromise();
    this.isLoggedin.next(result.token ? true : false);
    localStorage.setItem("token", result.token);
    localStorage.setItem("userID", result.userID.toString());
    localStorage.setItem("roleID", result.roleID.toString());
    return result;
  }
 async logout(){
    localStorage.clear();
    this.isLoggedin.next(false);
    this.userID.next(0);
    this.roleID.next(0);
  //  localStorage.setItem("refreshed", "1" );
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
  addLocation(location:Locaties){
    return this._httpClient.post<Locaties>("https://localhost:5001/api/Locations", location);
  }
  addStudent(student:Student){
    return this._httpClient.post<Student>("https://localhost:5001/api/Students", student);
  }
  getUser(id: number):Observable<User> {
    return this._httpClient.get<User>("https://localhost:5001/api/Users/"+ id);
  }
  getUsers():Observable<User[]>{
    return this._httpClient.get<User[]>("https://localhost:5001/api/Users");
  }
  updateUser(user: User){
    return this._httpClient.put("https://localhost:5001/api/Users/" + user.userID, user);
  }
  async getMe():Promise<User>{
    return this._httpClient.get<User>("https://localhost:5001/api/Users/me").toPromise();
  }
 
}
