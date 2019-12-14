import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private _userService:UserService,private router: Router) { }

  users:User[];

  ngOnInit() {
    this.getUsers();
  }

  filterargs = {title: 'Admin'};

  getUsers(){
    this._userService.getUsers().subscribe(
      result => {
      this.users=result
      console.log(this.users);
      }
    );
  }

  delete(userid: number){
    this._userService.deleteUser(userid).subscribe( result => {
      this.router.navigate(['/admin'])
    });
  }

  
}
