import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemanagementComponent } from './coursemanagement.component';

describe('CoursemanagementComponent', () => {
  let component: CoursemanagementComponent;
  let fixture: ComponentFixture<CoursemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursemanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
