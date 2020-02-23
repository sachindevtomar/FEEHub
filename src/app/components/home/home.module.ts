// src/app/components/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
@NgModule({
declarations: [HomeComponent],
exports: [HomeComponent],
imports: [
RouterModule.forChild(HomeRoutes),
CommonModule
]
})
export class HomeModule { }