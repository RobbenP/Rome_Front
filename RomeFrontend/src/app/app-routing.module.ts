import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AvailableTasksComponent } from './student/available-tasks/available-tasks.component';
import { TaskDetailsComponent } from './student/available-tasks/task-details/task-details.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { AddTaskComponent } from './company/list-tasks/add-task/add-task.component';
import { DetailTaskComponent } from './company/list-tasks/detail-task/detail-task.component';
import { RegisterCompanyComponent } from './register/register-company/register-company.component';
import { RegisterStudentComponent } from './register/register-student/register-student.component';
const routes: Routes = [

  { path: 'login', component :  LoginComponent},
  { path: 'registreer', component : RegisterComponent},
  { path: 'registreer/bedrijf', component : RegisterCompanyComponent},
  { path: 'registreer/student', component: RegisterStudentComponent},
  { path: 'taakToevoegen', component : AddTaskComponent},
  { path: 'takenlijstStudent', component:AvailableTasksComponent}
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
  export class AppRoutingModule {}