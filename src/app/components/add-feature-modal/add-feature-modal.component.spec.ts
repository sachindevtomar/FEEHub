import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeatureModalComponent } from './add-feature-modal.component';

describe('AddFeatureModalComponent', () => {
  let component: AddFeatureModalComponent;
  let fixture: ComponentFixture<AddFeatureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeatureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeatureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
