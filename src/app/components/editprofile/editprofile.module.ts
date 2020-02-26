// src/app/components/editprofile/editprofile.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from "./editprofile.component";
import { RouterModule } from '@angular/router';
import { EditprofileRoutes } from './editprofile.route';

@NgModule({
declarations: [EditprofileComponent],
exports: [EditprofileComponent],
imports: [
    RouterModule.forChild(EditprofileRoutes),
    CommonModule
]
})
export class EditprofileModule { }