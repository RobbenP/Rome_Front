import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./login/login/login.component";

import { RegisterComponent } from "./register/register/register.component";
import { RegisterCompanyComponent } from "./register/register-company/register-company.component";
import { RegisterStudentComponent } from "./register/register-student/register-student.component";

import { AdminComponent } from "./admin/admin.component";
import { ListUsersComponent } from "./admin/list-users/list-users.component";
import { ListTasksAdminComponent } from "./admin/list-tasks-admin/list-tasks-admin.component";
import { DetailTaskAdminComponent } from "./admin/list-tasks-admin/detail-task-admin/detail-task-admin.component";
import { UserAdminReviewComponent } from "./admin/list-users/user-admin-review/user-admin-review.component";
import { UserAdminDetailsComponent } from "./admin/list-users/user-admin-details/user-admin-details.component";

import { StudentComponent } from "./student/student.component";
import { AvailableTasksComponent } from "./student/available-tasks/available-tasks.component";
import { TaskDetailsComponent } from "./student/available-tasks/task-details/task-details.component";

import { CompanyComponent } from "./company/company.component";
import { ListTasksComponent } from "./company/list-tasks/list-tasks.component";
import { AddTaskComponent } from "./company/list-tasks/add-task/add-task.component";
import { DetailTaskComponent } from "./company/list-tasks/detail-task/detail-task.component";
import { EditTasksComponent } from "./company/list-tasks/edit-tasks/edit-tasks.component";
import { ReviewComponent } from "./review/review/review.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { RemoveTaskComponent } from "./company/list-tasks/remove-task/remove-task.component";

import { InfoBedrijfComponent } from "./company/info-bedrijf/info-bedrijf.component";
import { UserDetailsBedrijfComponent } from "./company/list-tasks/edit-tasks/user-details-bedrijf/user-details-bedrijf.component";
import { FinishRegisterGuardService } from "./services/finish-register-guard.service";
import { DetailTaskResolverService } from "./resolvers/detail-task-resolver.service";
import { InfoBedrijfResolverService } from "./resolvers/info-bedrijf-resolver.service";
import { StudentGuardService } from "./services/student-guard.service";
import { AdminGuardService } from "./services/admin-guard.service";
import { CompanyGuardService } from './services/company-guard.service';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { TasksResolverService } from './resolvers/tasks-resolver.service';
import { AllUsersResolverService } from './resolvers/all-users-resolver.service';
import { AllTasksResolverService } from './resolvers/all-tasks-resolver.service';
import { OneTaskResolverService } from './resolvers/one-task-resolver.service';
import { StudentReviewsComponent } from './student/student-reviews/student-reviews.component';

import { OneUserResolverService } from './resolvers/one-user-resolver.service';
const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "registreer",
    component: RegisterComponent,
    canActivate: [FinishRegisterGuardService]
  },
  { path: "registreer/bedrijf", component: RegisterCompanyComponent },
  { path: "registreer/student", component: RegisterStudentComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [FinishRegisterGuardService, AdminGuardService]
  },
  {
    path: "admin/gebruikersLijst",
    component: ListUsersComponent,
    resolve: { users: AllUsersResolverService },
    canActivate: [FinishRegisterGuardService, AdminGuardService]
  },
  {
    path: "admin/takenLijst",
    component: ListTasksAdminComponent,
    resolve: { tasks: AllTasksResolverService },
    canActivate: [FinishRegisterGuardService, AdminGuardService]
  },
  {
    path: "admin/takenlijst/detailtaak/:id",
    component: DetailTaskAdminComponent,
    resolve: { task: OneTaskResolverService },
    canActivate: [FinishRegisterGuardService, AdminGuardService]
  },
  {
    path: "student",
    component: StudentComponent,
    canActivate: [FinishRegisterGuardService, StudentGuardService]
  },
  {
    path: "student/takenlijst",
    component: AvailableTasksComponent,
    resolve: { tasks: TasksResolverService },
    canActivate: [FinishRegisterGuardService, StudentGuardService]
  },
  {
    path: "student/detailsTaak/:id",
    component: TaskDetailsComponent,
    resolve: { data: DetailTaskResolverService },
    canActivate: [FinishRegisterGuardService, StudentGuardService]
  },
  {
    path: "bedrijf",
    component: CompanyComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "bedrijf/takenlijst",
    component: ListTasksComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "bedrijf/takenlijst/taakToevoegen",
    component: AddTaskComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "bedrijf/takenlijst/taakVerwijderen/:id",
    component: RemoveTaskComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "bedrijf/takenlijst/taakWijzigen/:id",
    component: EditTasksComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "bedrijf/takenlijst/detailtaak/:id",
    component: DetailTaskComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "review/:assignId/:studentId",
    component: ReviewComponent,
    canActivate: [FinishRegisterGuardService, LoggedInGuardService]
  },
  {
    path: "review/:assignId/:studentId/:reviewId",
    component: ReviewComponent,
    canActivate: [FinishRegisterGuardService, LoggedInGuardService]
  },

  {
    path: "bedrijf/accountSettings/:id",
    component: AccountSettingsComponent,
    resolve: {gebruikers: OneUserResolverService},
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "student/accountSettings/:id",
    component: AccountSettingsComponent,
    resolve: {gebruikers: OneUserResolverService},
    canActivate: [FinishRegisterGuardService, StudentGuardService]
  },
  {
    path: "student/reviews/:userID",
    component: StudentReviewsComponent,
    canActivate: [FinishRegisterGuardService, StudentGuardService]
  },
  {
    path: "infoBedrijf/:id",
    component: InfoBedrijfComponent,
    resolve: { data: InfoBedrijfResolverService },
    canActivate: [FinishRegisterGuardService, LoggedInGuardService]
  },
  {
    path: "bedrijf/studentDetail/:id/:assignmentID",
    component: UserDetailsBedrijfComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "bedrijf/studentDetail/:id",
    component: UserDetailsBedrijfComponent,
    canActivate: [FinishRegisterGuardService, CompanyGuardService]
  },
  {
    path: "admin/reviewsGebruiker/:id",
    component: UserAdminReviewComponent,
    canActivate: [FinishRegisterGuardService, AdminGuardService]
  },
  {
    path: "admin/userDetails/:id",
    component: AccountSettingsComponent,
    resolve: {gebruikers: OneUserResolverService},
    canActivate: [FinishRegisterGuardService, LoggedInGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
