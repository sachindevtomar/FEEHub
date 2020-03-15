import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CoursesFilterPipe } from '@app/pipes/coursesfilter.pipe';
import { HelperMethods } from '@app/_helpers/helper.methods';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        CoursesComponent,
        CoursesFilterPipe
      ],
      providers: [
        HttpClient,
        HttpHandler,
        HelperMethods
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('beginPagination', () => {

    it('should have empty array of paged Items', () => {
      var pagedItems: Array<any> = [];
      component.beginPagination(pagedItems);
      expect(component.pagedItems.length).toBe(0);
    });

    it('should have item array of paged Items', () => {
      var pagedItems: Array<any> = ['1', '2', '3'];
      component.beginPagination(pagedItems);
      expect(component.pagedItems.length).toBe(3);
    });
  });

  describe('showMoreTechnologies method', () => {
    let showMoreDiv: HTMLDivElement;
    beforeEach(() => {
      showMoreDiv = document.createElement('div');
      showMoreDiv.id = "courses-filter-technology";
      showMoreDiv.style.maxHeight = "300px";
      component.courseFilterShowMore = false;
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(showMoreDiv);
    });

    it('should have maxHeight as 400px and overFlowY as scroll', () => {
      component.showMoreTechnologies();
      expect(showMoreDiv.style.maxHeight).toBe("400px");
      expect(showMoreDiv.style.overflowY).toBe("scroll");
    });

    it('should have true courseFilterShowMore flag', () => {
      component.showMoreTechnologies();
      expect(component.courseFilterShowMore).toBeTruthy();
    });
  });

  describe('showLessTechnologies method', () => {
    let showLessDiv: HTMLDivElement;
    beforeEach(() => {
      showLessDiv = document.createElement('div');
      showLessDiv.id = "courses-filter-technology";
      showLessDiv.style.maxHeight = "300px";
      component.courseFilterShowMore = false;
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(showLessDiv);
    });

    it('should have maxHeight as 200px and overFlowY as hidden', () => {
      component.showLessTechnologies();
      expect(showLessDiv.style.maxHeight).toBe("200px");
      expect(showLessDiv.style.overflowY).toBe("hidden");
    });

    it('should have true courseFilterShowMore flag', () => {
      component.showLessTechnologies();
      expect(component.courseFilterShowMore).toBeTruthy();
    });
  });

  describe('showMoreLessbutton method', () => {
    beforeEach(() => {
      component.courseShowMoreLessButton = false;
    });

    it('should have true courseShowMoreLessButton flag', () => {
      component.showMoreLessbutton();
      expect(component.courseShowMoreLessButton).toBeTruthy();
    });
  });

  describe('collectAllTags method', () => {
    it('should return 19 different technologies based on available tags in COURSES', () => {
      component.collectAllTags();
      expect(component.technologyTags.length).toBe(19);
    });
  });

  describe('filterCoursesUsingTags method', () => {
    beforeEach(() => {
      component.selectedTags = ['A', 'B', 'C'];
    });

    it('should return length of selectedTags as 2, as A is already present in selectedTags array', () => {
      component.filterCoursesUsingTags('A');
      expect(component.selectedTags.length).toBe(2);
    });

    it('should return length of selectedTags as 4, as D is not present in selectedTags array', () => {
      component.filterCoursesUsingTags('D');
      expect(component.selectedTags.length).toBe(4);
    });

    it('should return length of filteredCoursesByTags as 0 if coursesAll doesn\'t has any value', () => {
      component.selectedTags = [];
      component.filterCoursesUsingTags('D');
      expect(component.filteredCoursesByTags.length).toBe(0);
    });

    it('getCommonCoursesAfterFilter should have been called', () => {
      component.filterCoursesUsingTags('A');
      expect(component.getCommonCoursesAfterFilter).toHaveBeenCalled;
    });
  });

  describe('filterCoursesUsingDuration method', () => {
    it('getCommonCoursesAfterFilter should have been called', () => {
      component.filterCoursesUsingDuration();
      expect(component.getCommonCoursesAfterFilter).toHaveBeenCalled;
    });
  });
});
