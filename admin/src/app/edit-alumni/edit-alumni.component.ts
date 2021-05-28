import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-edit-alumni',
  templateUrl: './edit-alumni.component.html',
  styles: [
    `
      body {
        background-color: aquamarine;
        height: 93vh;
      }
      
    `,
  ],
})
export class EditAlumniComponent implements OnInit {
  public alumni = { name: '', id: '', password: '', contact: '', mail: '' };
  constructor(private adminService: AlumniService) {}

  public alumnis;

  ngOnInit(): void {
    this.adminService.getalumni().subscribe(
      (data) => {
        this.alumnis = data
      },
      (error) => console.error(error)
    );
  }
  onSubmit() {
    this.adminService.addalumni(this.alumni).subscribe();
    location.reload();
  }
  delete(event) {
    var id = event.srcElement.attributes.title.nodeValue;
    this.adminService.deletealumni(id).subscribe();
    location.reload();
  }
}
