import { Component, OnInit } from '@angular/core';
import { Course } from "../Shared/course";
import { COURSES } from "../Shared/courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] =COURSES;

  constructor() { }

  ngOnInit() {
  }

}
