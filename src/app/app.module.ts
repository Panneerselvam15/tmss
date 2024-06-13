import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursemanagementComponent } from './coursemanagement/coursemanagement.component';
import { ParticipantmanagementComponent } from './participantmanagement/participantmanagement.component';
import { SessionmanagementComponent } from './sessionmanagement/sessionmanagement.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EnrollmentAttendanceComponent } from './enrollment-attendance/enrollment-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursemanagementComponent,
    ParticipantmanagementComponent,
    SessionmanagementComponent,
    RegistrationComponent,
    LoginComponent,
    EnrollmentAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
