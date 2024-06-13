import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { CourseService } from '../services/course.service';
import { Session } from '../models/session.model';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-session-management',
  templateUrl: './session-management.component.html',
  styleUrls: ['./session-management.component.css']
})
export class SessionManagementComponent implements OnInit {
  sessions: Session[] = [];
  courses: Course[] = [];
  session: Session = {
    id: 0,
    courseId: 0,
    date: new Date(),
    time: '',
    location: '',
    instructor: ''
  };

  constructor(private sessionService: SessionService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadSessions();
    this.loadCourses();
  }

  loadSessions() {
    this.sessionService.getSessions().subscribe((data: Session[]) => {
      this.sessions = data;
    });
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  onSubmit() {
    if (this.session.id === 0) {
      this.sessionService.createSession(this.session).subscribe(() => {
        this.resetForm();
        this.loadSessions();
      });
    } else {
      this.sessionService.updateSession(this.session).subscribe(() => {
        this.resetForm();
        this.loadSessions();
      });
    }
  }

  editSession(session: Session) {
    this.session = { ...session };
  }

  deleteSession(id: number) {
    this.sessionService.deleteSession(id).subscribe(() => {
      this.loadSessions();
    });
  }

  resetForm() {
    this.session = {
      id: 0,
      courseId: 0,
      date: new Date(),
      time: '',
      location: '',
      instructor: ''
    };
  }

  getCourseName(courseId: number): string {
    const course = this.courses.find(c => c.id === courseId);
    return course ? course.name : '';
  }
}