import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlumniService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/admin/';
  addbookurl = this.url + 'addbook';
  getall = this.url + 'getwhole';
  deleteUrl = this.url + 'delete';
  addnoticeurl = this.url + 'addnotice';
  getnoticeurl = this.url + 'getnotice';
  delnoticeUrl = this.url + 'deletenotice';
  addalumniurl = this.url + 'addalumni';
  getalumniurl = this.url + 'getalumni';
  delalumniUrl = this.url + 'deletealumni';
  addbook(data) {
    return this.http.post(this.addbookurl, { data: data });
  }
  getbook() {
    return this.http.get(this.getall);
  }
  deletebook(name, deptyear) {
    return this.http.post(this.deleteUrl, { name: name, deptyear: deptyear });
  }
  addnotice(notice) {
    return this.http.post(this.addnoticeurl, { notice: notice });
  }
  getnotice() {
    return this.http.get(this.getnoticeurl);
  }
  deletenotice(name) {
    return this.http.post(this.delnoticeUrl, { name: name });
  }
  addalumni(alumni) {
    return this.http.post(this.addalumniurl, { alumni: alumni });
  }
  getalumni() {
    return this.http.get(this.getalumniurl);
  }
  deletealumni(id) {
    return this.http.post(this.delalumniUrl, { id: id });
  }
}
