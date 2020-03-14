import { Component, OnInit } from '@angular/core';
import { Course } from "../../models/course";
import { COURSES } from "../../Shared/courses";
import {MatSliderModule} from '@angular/material/slider';
import { HelperMethods } from '@app/_helpers/helper.methods';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title = 'custom-pagination-angular';
  pagedItems: Array<any>;
  coursesAll: Course[] = null;
  filteredCoursesByTags: Course[] = null;
  filteredCoursesByDuration: Course[] = null;
  finalFilteredCourses: Course[] = null;
  public courseSearchText: string = "";
  public technologyTags: string[] = [];
  public courseFilterShowMore: boolean = true;
  public courseShowMoreLessButton: boolean = false;
  public selectedTags: string[] = [];
  public maxDuration: number = 0;
  public currentDurationSliderValue: number = 0;


  constructor(public helperMethods: HelperMethods) { }

  ngOnInit() {
    this.filteredCoursesByDuration = this.filteredCoursesByTags = this.coursesAll = COURSES;
    this.getCommonCoursesAfterFilter();
    this.collectAllTags();
    this.currentDurationSliderValue = this.maxDuration = Math.max.apply(Math, COURSES.map(function (o) { return o.duration; }));
  }

  public beginPagination(pagedItems: Array<any>) {
    this.pagedItems = pagedItems;
  }

  public collectAllTags() {
    for (var i = 0, j = 0; i < COURSES.length; i++) {
      for (var k = 0; k < COURSES[i].tags.length; k++)
        this.technologyTags[j++] = COURSES[i].tags[k];
    }
    this.technologyTags = this.technologyTags.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });
    this.technologyTags = this.technologyTags.sort();
  }

  public showMoreTechnologies() {
    this.courseFilterShowMore = !this.courseFilterShowMore;
    document.getElementById('courses-filter-technology').style.maxHeight = "400px";
    document.getElementById('courses-filter-technology').style.overflowY = "scroll";

  }

  public showLessTechnologies() {
    this.courseFilterShowMore = !this.courseFilterShowMore;
    document.getElementById('courses-filter-technology').style.maxHeight = "200px";
    document.getElementById('courses-filter-technology').style.overflow = "hidden";
  }

  public showMoreLessbutton() {
    this.courseShowMoreLessButton = !this.courseShowMoreLessButton;
  }

  public filterCoursesUsingTags(technology) {

    if (this.selectedTags.includes(technology))
      this.selectedTags = this.selectedTags.filter(x => x != technology);
    else
      this.selectedTags.push(technology);

    if (this.selectedTags.length == 0) {
      this.filteredCoursesByTags = this.coursesAll;
      this.getCommonCoursesAfterFilter();
      return;
    }

    this.filteredCoursesByTags = this.coursesAll.filter(x => x.tags.some(s => this.selectedTags.includes(s)));
    this.getCommonCoursesAfterFilter();
  }

  public filterCoursesUsingDuration() {
    this.filteredCoursesByDuration = this.coursesAll.filter(x => x.duration <= this.currentDurationSliderValue);
    this.getCommonCoursesAfterFilter();
  }

  public getCommonCoursesAfterFilter() {

    this.finalFilteredCourses = this.filteredCoursesByTags.filter(o => this.filteredCoursesByDuration.some(s => o.id === s.id));

  }

  public formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}
