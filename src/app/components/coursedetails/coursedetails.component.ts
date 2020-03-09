import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Course } from '@app/models/course';
import { COURSES } from '@app/Shared/courses';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.course = this.getCourse(id);
  }

  goBack(): void {
    this.location.back();
  }
  getCourse(id: number): Course {
    return COURSES.filter((course) => (course.id == id))[0];
  }

}
