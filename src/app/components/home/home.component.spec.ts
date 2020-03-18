import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HelperMethods } from '@app/_helpers/helper.methods';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
      providers: [HttpClient,
        HttpHandler,
        HelperMethods
      ]
    })
      .compileComponents();

    // Mock localStorage
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('CanViewBothCourseAndFeaturesTile method', () => {

    it('Method should return false as claim is returning false', () => {
      spyOn(component.helperMethods,"userHasClaim").and.returnValue(false);
      expect(component.CanViewBothCourseAndFeaturesTile()).toBe(false);
    });

    it('Method should return true as claim is returning true', () => {
      spyOn(component.helperMethods,"userHasClaim").and.returnValue(true);
      expect(component.CanViewBothCourseAndFeaturesTile()).toBe(true);
    });

  });
  
  function createHelperMethod():HelperMethods{
    return new HelperMethods();
  }
});
