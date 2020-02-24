import { Component, OnInit } from '@angular/core';
import { Course } from "../../models/course";
import { COURSES } from "../../Shared/courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title = 'custom-pagination-angular';
  pagedItems: Array<any>;
  coursesAll: Course[] = null;
  filteredCourses: Course[] = null;
  public courseSearchText: string = "";
  public technologyTags: string[] = [];
  public courseFilterShowMore: boolean = true;
  public courseShowMoreLessButton: boolean = false;
  public selectedTags: string[] = [];
  public maxDuration: number = 0;
  

  constructor() { }

  ngOnInit() {
    this.filteredCourses = this.coursesAll = COURSES;
    this.collectAllTags();
    this.maxDuration = Math.max.apply(Math, COURSES.map(function(o) { return o.duration; }));
  }

  beginPagination(pagedItems: Array<any>) {
    this.pagedItems = pagedItems;
  }

  collectAllTags() {
    for (var i = 0, j = 0; i < COURSES.length; i++) {
      for (var k = 0; k < COURSES[i].tags.length; k++)
        this.technologyTags[j++] = COURSES[i].tags[k];
    }
    this.technologyTags = this.technologyTags.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });
    this.technologyTags = this.technologyTags.sort();
  }

  showMoreTechnologies() {
    this.courseFilterShowMore = !this.courseFilterShowMore;
    document.getElementById('collapse-course-menu').style.maxHeight = "initial";
  }

  showLessTechnologies() {
    this.courseFilterShowMore = !this.courseFilterShowMore;
    document.getElementById('collapse-course-menu').style.maxHeight = "300px";
  }

  showMoreLessbutton() {
    this.courseShowMoreLessButton = !this.courseShowMoreLessButton;
  }

  filterCoursesUsingTags(technology) {

    if (this.selectedTags.includes(technology))
      this.selectedTags = this.selectedTags.filter(x => x != technology);
    else
      this.selectedTags.push(technology);

    if (this.selectedTags.length == 0) {
      this.filteredCourses = this.coursesAll;
      return;
    }

    this.filteredCourses = this.coursesAll.filter(x => x.tags.some(s => this.selectedTags.includes(s)));
  }
  
  filterCoursesUsingDuration(){
    console.log((<HTMLInputElement>document.getElementById("courses-filter-duration-slider")).value);
  }
}
