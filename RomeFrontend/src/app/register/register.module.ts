import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';



@NgModule({
  declarations: [RegisterComponent, RegisterStudentComponent, RegisterCompanyComponent],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
