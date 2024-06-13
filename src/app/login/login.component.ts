import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private service:StudentService) { }

  ngOnInit(): void {
  }
  login(form:any){
    if(this.service.stu.email==form.value.username && this.service.stu.password==form.value.password) 
      {this.router.navigate(['student'])}
    }
}


