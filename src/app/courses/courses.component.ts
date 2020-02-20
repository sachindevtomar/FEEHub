import { Component, OnInit } from '@angular/core';
import { Course } from "../models/course";
import { COURSES } from "../Shared/courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  title = 'custom-pagination-angular'; 
  pagedItems: Array<any>;  
  courses = [];

  constructor() { }

  ngOnInit() {
    this.courses = COURSES;
  }

  beginPagination(pagedItems: Array<any>) {  
    this.pagedItems = pagedItems;  
  } 

}
