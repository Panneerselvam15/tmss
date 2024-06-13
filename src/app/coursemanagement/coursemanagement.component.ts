import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {
  courses: Course[] = [];
  course: Course = {
    id: 0,
    name: '',
    description: '',
    instructor: '',
    duration: '',
    startDate: new Date(),
    endDate: new Date(),
    location: '',
    maxCapacity: 0
  };

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  onSubmit() {
    if (this.course.id === 0) {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.resetForm();
        this.loadCourses();
      });
    } else {
      this.courseService.updateCourse(this.course).subscribe(() => {
        this.resetForm();
        this.loadCourses();
      });
    }
  }

  editCourse(course: Course) {
    this.course = { ...course };
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.loadCourses();
    });
  }

  resetForm() {
    this.course = {
      id: 0,
      name: '',
      description: '',
      instructor: '',
      duration: '',
      startDate: new Date(),
      endDate: new Date(),
      location: '',
      maxCapacity: 0
    };
  }
}