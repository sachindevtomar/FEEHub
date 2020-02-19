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
  data = [];  
  pagedItems: Array<any>;  
  courses = [];
  //courses: Course[] =COURSES;

  constructor() { }

  ngOnInit() {
    this.courses = COURSES;
    this.data = Array(1000).fill(0).map((x, i) => ({ id: (i + 1), name: `Item Paged ${i + 1}`, product: `Product ${i + 1}` }));  
  }

  beginPagination(pagedItems: Array<any>) {  
    this.pagedItems = pagedItems;  
  } 

}
