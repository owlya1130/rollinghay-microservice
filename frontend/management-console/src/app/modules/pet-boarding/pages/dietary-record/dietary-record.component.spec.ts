import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryRecordComponent } from './dietary-record.component';

describe('DietaryRecordComponent', () => {
  let component: DietaryRecordComponent;
  let fixture: ComponentFixture<DietaryRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietaryRecordComponent]
    });
    fixture = TestBed.createComponent(DietaryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
