// src/app/components/courses/courses.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutes } from './login.route';

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(LoginRoutes),
        CommonModule
    ]
})
export class LoginModule { }