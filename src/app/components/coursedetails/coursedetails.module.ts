// src/app/components/coursedetails/hocoursedetailsme.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursedetailsComponent } from './coursedetails.component';
import { RouterModule } from '@angular/router';
import { CoursedetailsRoutes } from './coursedetails.route';


@NgModule({
    declarations: [CoursedetailsComponent],
    exports: [CoursedetailsComponent],
    imports: [
        RouterModule.forChild(CoursedetailsRoutes),
        CommonModule
    ]
})
export class CoursesdetailsModule { }