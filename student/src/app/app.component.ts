import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book';
import { Notice } from './notice';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student';
  public notSubmit=true;
  public notices:Notice[];
  constructor(public router:Router,public studentService:StudentService){}

  ngOnInit(){
    this.studentService.getnotice().subscribe(
      data=>this.notices=data
    )
  }

}
