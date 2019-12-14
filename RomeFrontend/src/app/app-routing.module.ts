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
import { InfoBedrijfResolverService } from "./resolvers/info-bedrijf-resolver.service";
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
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "admin/gebruikersLijst",
    component: ListUsersComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "admin/takenLijst",
    component: ListTasksAdminComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "admin/takenlijst/detailtaak",
    component: DetailTaskAdminComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "student",
    component: StudentComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "student/takenlijst",
    component: AvailableTasksComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "student/detailsTaak",
    component: TaskDetailsComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf",
    component: CompanyComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf/takenlijst",
    component: ListTasksComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf/takenlijst/taakToevoegen",
    component: AddTaskComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf/takenlijst/taakVerwijderen/:id",
    component: RemoveTaskComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf/takenlijst/taakWijzigen/:id",
    component: EditTasksComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf/takenlijst/detailtaak/:id",
    component: DetailTaskComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "review/:assignId/:studentId",
    component: ReviewComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "review/:assignId/:studentId/:reviewId",
    component: ReviewComponent,
    canActivate: [FinishRegisterGuardService]
  },

  {
    path: "bedrijf/accountSettings",
    component: AccountSettingsComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "student/accountSettings",
    component: AccountSettingsComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "infoBedrijf/:id",
    component: InfoBedrijfComponent,
    resolve: { data: InfoBedrijfResolverService },
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "bedrijf/studentDetail/:id",
    component: UserDetailsBedrijfComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "admin/reviewsGebruiker/:id",
    component: UserAdminReviewComponent,
    canActivate: [FinishRegisterGuardService]
  },
  {
    path: "admin/userDetails/:id",
    component: UserAdminDetailsComponent,
    canActivate: [FinishRegisterGuardService]
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
