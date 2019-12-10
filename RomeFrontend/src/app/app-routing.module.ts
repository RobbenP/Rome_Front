import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

<<<<<<< HEAD
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

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registreer", component: RegisterComponent },
  { path: "registreer/bedrijf", component: RegisterCompanyComponent },
  { path: "taakToevoegen", component: AddTaskComponent },
  { path: "takenlijstStudent", component: AvailableTasksComponent },
  { path: "detailsTaakStudent", component: TaskDetailsComponent }
=======
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AvailableTasksComponent } from './student/available-tasks/available-tasks.component';
import { TaskDetailsComponent } from './student/available-tasks/task-details/task-details.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { AddTaskComponent } from './company/list-tasks/add-task/add-task.component';
import { DetailTaskComponent } from './company/list-tasks/detail-task/detail-task.component';
import { RegisterCompanyComponent } from './register/register-company/register-company.component';
import { HomeComponent } from './home/home.component';
import { RegisterStudentComponent } from './register/register-student/register-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registreer', component: RegisterComponent },
  { path: 'registreer/bedrijf', component: RegisterCompanyComponent },
  { path: 'registreer/student', component:RegisterStudentComponent},
  { path: 'taakToevoegen', component: AddTaskComponent },
  { path: 'takenlijstStudent', component: AvailableTasksComponent }
>>>>>>> 179772bf9327c960cbcb478e1a6aff151ff37312
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
<<<<<<< HEAD
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
>>>>>>> 179772bf9327c960cbcb478e1a6aff151ff37312
