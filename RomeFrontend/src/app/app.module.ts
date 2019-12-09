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

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TaskComponent,
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
