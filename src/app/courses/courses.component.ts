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
  public courseSearchText: string = "";
  public technologyTags : string[] = [];
  public courseFilterShowMore: boolean = true;
  public courseShowMoreLessButton: boolean = false; 
  constructor() { }

  ngOnInit() {
    this.courses = COURSES;
    this.collectAllTags();    
  }

  beginPagination(pagedItems: Array<any>) {  
    this.pagedItems = pagedItems;  
  } 

  collectAllTags(){
    for(var i=0, j=0; i<COURSES.length; i++){
      for(var k=0; k<COURSES[i].tags.length; k++)
        this.technologyTags[j++] = COURSES[i].tags[k];
    }
    this.technologyTags = this.technologyTags.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
  });
    this.technologyTags = this.technologyTags.sort();
  }

  showMoreTechnologies(){
    this.courseFilterShowMore = ! this.courseFilterShowMore;
    document.getElementById('collapse-course-menu').style.maxHeight="initial";
  }

  showLessTechnologies(){
    this.courseFilterShowMore = ! this.courseFilterShowMore;
    document.getElementById('collapse-course-menu').style.maxHeight="300px";
  }

  showMoreLessbutton(){
    this.courseShowMoreLessButton = ! this.courseShowMoreLessButton;
  }

}
