import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './cours-info.component';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/compoent/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        StarModule,
        AppPipeModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'courses', pathMatch: 'full'
            },
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
