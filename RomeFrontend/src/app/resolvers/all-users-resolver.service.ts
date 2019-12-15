import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllUsersResolverService implements Resolve<Observable<User[]>>{

  constructor(private userService:UserService) { } 

  resolve(){
    return this.userService.getUsers();
  }
}
