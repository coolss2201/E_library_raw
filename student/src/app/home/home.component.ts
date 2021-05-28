import { Component, OnInit } from '@angular/core';
import { Dept_year } from '../dept_year';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dept_year=new Dept_year('','');
  public notSubmit=true;
  public str:string;

  constructor(public studentService:StudentService,public router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.notSubmit=false;
    this.str=this.dept_year.dept+this.dept_year.year;
    this.router.navigate(['/student/books',this.str])
  }
  
}
