import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';

const appRoutes: Routes = [

  { path: 'Opdrachten', component :  TaskComponent},
  { path: 'Profiel', component : ProfileComponent},
  ];
import { AvailableTasksComponent } from './student/available-tasks/available-tasks.component';
import { TaskDetailsComponent } from './student/available-tasks/task-details/task-details.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { AddTaskComponent } from './company/list-tasks/add-task/add-task.component';
import { DetailTaskComponent } from './company/list-tasks/detail-task/detail-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TaskComponent,
    AvailableTasksComponent,
    TaskDetailsComponent,
    ListUsersComponent,
    ListTasksComponent,
    AddTaskComponent,
    DetailTaskComponent
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
