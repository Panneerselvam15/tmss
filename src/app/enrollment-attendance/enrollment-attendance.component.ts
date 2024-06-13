import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../services/enrollment.service';
import { SessionService } from '../services/session.service';
import { ParticipantService } from '../services/participant.service';
import { AttendanceService } from '../services/attendance.service';
import { Enrollment } from '../models/enrollment.model';
import { Session } from '../models/session.model';
import { Participant } from '../models/participant.model';
import { Attendance } from '../models/attendance.model';

@Component({
  selector: 'app-enrollment-attendance',
  templateUrl: './enrollment-attendance.component.html',
  styleUrls: ['./enrollment-attendance.component.css']
})
export class EnrollmentAttendanceComponent implements OnInit {
  sessions: Session[] = [];
  participants: Participant[] = [];
  enrollments: Enrollment[] = [];
  attendances: Attendance[] = [];
  enrollment: Enrollment = {
    sessionId: 0,
    participantId: 0
  };

  constructor(
    private enrollmentService: EnrollmentService,
    private sessionService: SessionService,
    private participantService: ParticipantService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    this.loadSessions();
    this.loadParticipants();
    this.loadAttendances();
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe((data: Session[]) => {
      this.sessions = data;
    });
  }

  loadParticipants() {
    this.participantService.getParticipants().subscribe((data: Participant[]) => {
      this.participants = data;
    });
  }

  loadAttendances() {
    this.attendanceService.getAttendances().subscribe((data: Attendance[]) => {
      this.attendances = data;
    });
  }

  onSubmitEnrollment() {
    this.enrollmentService.createEnrollment(this.enrollment).subscribe(() => {
      this.resetEnrollmentForm();
      this.loadAttendances();
    });
  }

  updateAttendanceStatus(attendance: Attendance) {
    this.attendanceService.updateAttendance(attendance).subscribe(() => {
      this.loadAttendances();
    });
  }

  resetEnrollmentForm() {
    this.enrollment = {
      sessionId: 0,
      participantId: 0
    };
  }

  getSessionDetails(sessionId: number): string {
    const session = this.sessions.find(s => s.id === sessionId);
    return session ? ${session.courseName} - ${session.date} ${session.time} : '';
  }

  getParticipantName(participantId: number): string {
    const participant = this.participants.find(p => p.id === participantId);
    return participant ? ${participant.firstName} ${participant.lastName} : '';
  }
}
