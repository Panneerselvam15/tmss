import { Component, OnInit } from '@angular/core';
import { RegistrationData } from './studentreg.model';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private Service:StudentService) { }

  ngOnInit(): void {
  }
  register(form:any){
    this.Service.stu.firstName=form.value.firstName
    this.Service.stu.lastName=form.value.lastName
    this.Service.stu.email=form.value.email
    this.Service.stu.password=form.value.password
    this.Service.stu.confirmPassword=form.value.confirmPassword
    this.Service.stu.dob=form.value.dob
    this.Service.stu.address=form.value.address
    this.Service.stu.phoneNumber=form.value.phoneNumber
    this.Service.stu.major=form.value.major
    this.router.navigate(['Login'])
  }

}


