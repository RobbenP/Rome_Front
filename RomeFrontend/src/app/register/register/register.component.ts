import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userType: any;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(){
    if (this.userType == 'company'){
      this.router.navigate(['registreer/bedrijf']);
    }
    else if (this.userType == 'student'){
      this.router.navigate(['registreer/student']);
    }
    console.log(this.userType);
  }
}
