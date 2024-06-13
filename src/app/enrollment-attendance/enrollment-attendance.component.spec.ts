import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentAttendanceComponent } from './enrollment-attendance.component';

describe('EnrollmentAttendanceComponent', () => {
  let component: EnrollmentAttendanceComponent;
  let fixture: ComponentFixture<EnrollmentAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
