import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { Error404Component } from './error/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent,
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  { path: '**', component: Error404Component },
];
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
