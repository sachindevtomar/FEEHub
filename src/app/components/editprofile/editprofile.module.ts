// src/app/components/editprofile/editprofile.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from "./editprofile.component";
import { RouterModule } from '@angular/router';
import { EditprofileRoutes } from './editprofile.route';
import { AddClaimModalComponent } from "../add-claim-modal/add-claim-modal.component";
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [EditprofileComponent,
        AddClaimModalComponent],
    exports: [EditprofileComponent],
    imports: [
        RouterModule.forChild(EditprofileRoutes),
        CommonModule,
        TagInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EditprofileModule { }