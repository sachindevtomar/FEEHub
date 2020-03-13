import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailsComponent } from './coursedetails.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Course } from '@app/models/course';

describe('CoursedetailsComponent', () => {
  let component: CoursedetailsComponent;
  let fixture: ComponentFixture<CoursedetailsComponent>;
  let courseValue: Course;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CoursedetailsComponent],
      providers: [CoursedetailsComponent, {
        provide: ActivatedRoute,
        useValue: { snapshot: { params: { 'id': '1002' } } }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courseValue = {
      id: 1002,
      courseName: 'Xamarin',
      courseDescription: 'Xamarin is an open-source platform for building modern and performant applications for iOS, Android, and Windows with .NET. Xamarin is an abstraction layer that manages communication of shared code with underlying platform code. Xamarin runs in a managed environment that provides conveniences such as memory allocation and garbage collection.',
      courseDetailsPageLink: 'https://link1',
      tags: ['C#', 'Xamarin'],
      duration: 6
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter courses on the basis of 1002 course id', () => {
    expect(component.getCourse(1002)).toEqual(courseValue);
  });

  it('should return null for invalid course id', () => {
    expect(component.getCourse(0)).toEqual(undefined);
  });
});
