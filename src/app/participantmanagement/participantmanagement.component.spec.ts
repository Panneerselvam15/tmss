import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantmanagementComponent } from './participantmanagement.component';

describe('ParticipantmanagementComponent', () => {
  let component: ParticipantmanagementComponent;
  let fixture: ComponentFixture<ParticipantmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
