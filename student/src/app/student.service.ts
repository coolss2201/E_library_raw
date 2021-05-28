import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { Notice } from './notice';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public books: Book[];
  constructor(public http: HttpClient) {}

  getbookurl = 'http://localhost:3000/student/get';
  getnoticeurl = 'http://localhost:3000/student/getnotice';

  getBook(str): Observable<Book[]> {
    return this.http.post<Book[]>(this.getbookurl, {
      deptyear: str.toLowerCase(),
    });
  }

  getnotice() {
    return this.http.get<Notice[]>(this.getnoticeurl);
  }
}
