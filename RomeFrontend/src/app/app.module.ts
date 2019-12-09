import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AvailableTasksComponent } from './student/available-tasks/available-tasks.component';
import { TaskDetailsComponent } from './student/available-tasks/task-details/task-details.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { AddTaskComponent } from './company/list-tasks/add-task/add-task.component';
import { DetailTaskComponent } from './company/list-tasks/detail-task/detail-task.component';

const appRoutes: Routes = [

  { path: 'login', component :  LoginComponent},
  { path: 'register', component : RegisterComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    AvailableTasksComponent,
    TaskDetailsComponent,
    ListUsersComponent,
    ListTasksComponent,
    AddTaskComponent,
    DetailTaskComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
