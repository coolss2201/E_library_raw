import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styles: [
    `
      body {
        background-color: aquamarine;
        height: 93vh;
      }
      a{
        color:white;
      }
    `,
  ],
})
export class EditNoticeComponent implements OnInit {
  public notice = { name: '', link: '' };
  constructor(public alumniService: AlumniService) {}

  public notices
  ngOnInit(): void {
    this.alumniService.getnotice().subscribe(
      data=>this.notices=data
    )
  }

  onAdd() {
    this.alumniService.addnotice(this.notice).subscribe();
    location.reload();
  }
  delete(event){
    var name=event.srcElement.attributes.title.nodeValue;
    this.alumniService.deletenotice(name).subscribe();
    location.reload();
  }
}
