import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div>
    <h4>  Sayan Saha</h4>
    <p>contact:8116640661</p>
    <p>gmail:ssayan084@gmail.com</p>
  </div>
  `,
  styles: [`
  div{
    text-align:center;
    margin-top:30vh;
  }
  @media only screen and (max-width:700px) {
  div{
    margin-top:0vh;
  }
}
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
