import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private _userService:UserService,private router: Router, private location: Location) { }
  str: string;
  users:User[];
  username: any;

  ngOnInit() {
    //this.getUsers();
    this.users = this.route.snapshot.data["users"];
  }

  filterUsers() { 
    this.username = this.str;
  }
  
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
      //window.location.reload();
      this.getUsers();
    });
  }
 
  back(){
    this.location.back();
  }
  
}
