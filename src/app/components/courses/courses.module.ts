// src/app/components/courses/courses.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule } from '@angular/router';
import { CoursesRoutes } from './courses.route';
import { CoursesFilterPipe } from '../../pipes/coursesfilter.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
    declarations: [CoursesComponent,
        CoursesFilterPipe,
        JwPaginationComponent],

    exports: [CoursesComponent],
    imports: [
        FormsModule,
        RouterModule.forChild(CoursesRoutes),
        CommonModule,
        MatSliderModule
    ],
    providers: []
})
export class CoursesModule { }