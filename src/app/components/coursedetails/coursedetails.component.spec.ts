import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailsComponent } from './coursedetails.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CoursedetailsComponent', () => {
  let component: CoursedetailsComponent;
  let fixture: ComponentFixture<CoursedetailsComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
