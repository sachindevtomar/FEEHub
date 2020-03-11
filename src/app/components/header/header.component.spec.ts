import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ HeaderComponent ],
      providers: [HttpClient,
                  HttpHandler
                 ]
    })
    .compileComponents();

    // Mock localStorage
    var store = {'getItem': "{\"name\":\"Sachin Dev Tomar\",\"role\":\"Sub-Administrator\",\"username\":\"sachin\",\"password\":\"sachin\",\"claims\":[\"CanViewCourses\",\"CanModifyFeatures\"],\"emailid\":\"sachin@maq.com\",\"phoneNumber\":\"000000-0000\",\"country\":\"Dubai\",\"gender\":\"Male\",\"areaOfInterest\":[\"C#\",\"BOT\",\"Android\",\"Dynamics 365\"]}"
                };

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
    return store['getItem'];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value + '';
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
