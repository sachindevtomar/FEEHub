import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClaimModalComponent } from './add-claim-modal.component';

describe('AddClaimModalComponent', () => {
  let component: AddClaimModalComponent;
  let fixture: ComponentFixture<AddClaimModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClaimModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClaimModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
