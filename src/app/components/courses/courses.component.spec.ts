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

  describe('showMoreTechnologies', () => {
    let showMoreDiv: HTMLDivElement;
    beforeEach(() => {
       showMoreDiv = document.createElement('div');
       showMoreDiv.id = "courses-filter-technology";
       showMoreDiv.style.maxHeight = "300px";
       component.courseFilterShowMore = false;
       document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(showMoreDiv);
    });

    it('should have maxHeight as 400px', () => {
      component.showMoreTechnologies();
      expect(showMoreDiv.style.maxHeight).toBe("400px");
      expect(showMoreDiv.style.overflowY).toBe("scroll");
    });
    
    it('should have true courseFilterShowMore flag', () => {
      component.showMoreTechnologies();
      expect(component.courseFilterShowMore).toBeTruthy();
    });
  });

});
