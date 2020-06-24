import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './cours-info.component';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';
import { ReplacePipe } from '../pipe/replace.pipe';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        StarComponent,
        ReplacePipe
    ],
    imports: [
        FormsModule,
        CommonModule,
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
