import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}
