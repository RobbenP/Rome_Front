import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { RegisterStudentComponent } from "./register/register-student/register-student.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login/login.component";
import { RegisterComponent } from "./register/register/register.component";
import { AvailableTasksComponent } from "./student/available-tasks/available-tasks.component";
import { TaskDetailsComponent } from "./student/available-tasks/task-details/task-details.component";
import { ListUsersComponent } from "./admin/list-users/list-users.component";

import { AddTaskComponent } from "./company/list-tasks/add-task/add-task.component";
import { DetailTaskComponent } from "./company/list-tasks/detail-task/detail-task.component";
import { RegisterCompanyComponent } from "./register/register-company/register-company.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { CompanyComponent } from "./company/company.component";
import { StudentComponent } from "./student/student.component";

import { ListTasksComponent } from "./company/list-tasks/list-tasks.component";
import { EditTasksComponent } from "./company/list-tasks/edit-tasks/edit-tasks.component";
import { ListTasksAdminComponent } from "./admin/list-tasks-admin/list-tasks-admin.component";
import { DetailTaskAdminComponent } from "./admin/list-tasks-admin/detail-task-admin/detail-task-admin.component";
import { SecurityInterceptor } from "./services/security.interceptor";
import { ReviewModule } from "./review/review.module";
import { RemoveTaskComponent } from './company/list-tasks/remove-task/remove-task.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { InfoBedrijfComponent } from './company/info-bedrijf/info-bedrijf.component';
import { FilterPipe } from './admin/list-users/filter.pipe';

import { UserDetailsBedrijfComponent } from './company/list-tasks/edit-tasks/user-details-bedrijf/user-details-bedrijf.component';
import { UserAdminReviewComponent } from './admin/list-users/user-admin-review/user-admin-review.component';
import { UserAdminDetailsComponent } from './admin/list-users/user-admin-details/user-admin-details.component';
import { AssignmentFilterPipe } from './admin/list-tasks-admin/assignment-filter.pipe';

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
    RegisterComponent,
    RegisterCompanyComponent,
    HomeComponent,
    RegisterStudentComponent,
    AdminComponent,
    CompanyComponent,
    StudentComponent,
    EditTasksComponent,
    ListTasksAdminComponent,
    DetailTaskAdminComponent,
    InfoBedrijfComponent,
    FilterPipe,
    RemoveTaskComponent,
    AccountSettingsComponent,
    InfoBedrijfComponent,
    UserDetailsBedrijfComponent,
    UserAdminReviewComponent,
    UserAdminDetailsComponent,
    AssignmentFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReviewModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
