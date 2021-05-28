import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  public Books: Book[];
  public str: string;

  constructor(public studentService: StudentService, public router: Router) {}

  ngOnInit(): void {
    this.str = this.router.url.toString().split('/').pop();
    this.studentService
      .getBook(this.str)
      .subscribe((data) => (this.Books = data));
  }
}
