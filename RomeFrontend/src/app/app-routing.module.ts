import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login/login.component";
import { RegisterComponent } from "./register/register/register.component";
import { AvailableTasksComponent } from "./student/available-tasks/available-tasks.component";
import { TaskDetailsComponent } from "./student/available-tasks/task-details/task-details.component";
import { ListUsersComponent } from "./admin/list-users/list-users.component";
import { ListTasksComponent } from "./admin/list-tasks/list-tasks.component";
import { AddTaskComponent } from "./company/list-tasks/add-task/add-task.component";
import { DetailTaskComponent } from "./company/list-tasks/detail-task/detail-task.component";
import { RegisterCompanyComponent } from "./register/register-company/register-company.component";
import { RegisterStudentComponent } from './register/register-student/register-student.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'registreer',
    component: RegisterComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'bedrijf', component: RegisterCompanyComponent },
          { path: 'student', component: RegisterStudentComponent },
        ]
      }
    ]
  },

  { path: 'admin', component: AdminComponent },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'takenlijst', component: AvailableTasksComponent },
        ]
      }
    ]
  },
  {
    path: 'bedrijf',
    component: CompanyComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'taakToevoegen', component: AddTaskComponent },
        ]
      }
    ]
  }
];




@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
