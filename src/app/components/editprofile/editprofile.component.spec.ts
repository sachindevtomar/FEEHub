import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileComponent } from './editprofile.component';

describe('EditprofileComponent', () => {
  let component: EditprofileComponent;
  let fixture: ComponentFixture<EditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditprofileComponent]
    })
      .compileComponents();

    var store = {
      'getItem': "{\"name\":\"Sachin Dev Tomar\",\"role\":\"Sub-Administrator\",\"username\":\"sachin\",\"password\":\"sachin\",\"claims\":[\"CanViewCourses\",\"CanModifyFeatures\"],\"emailid\":\"sachin@maq.com\",\"phoneNumber\":\"000000-0000\",\"country\":\"Dubai\",\"gender\":\"Male\",\"areaOfInterest\":[\"C#\",\"BOT\",\"Android\",\"Dynamics 365\"]}"
    };

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store['getItem'];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value + '';
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
