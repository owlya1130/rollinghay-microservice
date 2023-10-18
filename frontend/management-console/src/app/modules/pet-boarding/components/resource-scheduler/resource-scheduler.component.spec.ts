import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSchedulerComponent } from './resource-scheduler.component';

describe('ResourceSchedulerComponent', () => {
  let component: ResourceSchedulerComponent;
  let fixture: ComponentFixture<ResourceSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSchedulerComponent]
    });
    fixture = TestBed.createComponent(ResourceSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
