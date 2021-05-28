import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { AlumniService } from '../alumni.service';
import { Array } from '../array';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: [
    `
      body {
        background-color: aquamarine;
        height: 93vh;
      }
      table{
        text-align:center;
      }
      .input-group{
        width:20vw;
      }
      @media only screen and (max-width:700px){
        .input-group{
          width:80vw;
        }
      }
    `,
  ],
})
export class AddBookComponent implements OnInit {
  public book = {img:'', name: '', link: '' ,deptyear:''};
  constructor(private adminService: AlumniService) {}

  public wholebooks
  public clonedata
  public isfound=true;


  ngOnInit(): void {
  this.adminService.getbook().subscribe(
    data=>{this.wholebooks=data;
      this.clonedata=data;
    },
    error=>console.error(error)
  )
  
  }
  onSubmit() {
    this.adminService.addbook(this.book).subscribe();
    location.reload();
  }
  delete(event){
    var name=event.srcElement.attributes.title.nodeValue;
    var deptyear=event.srcElement.attributes.id.nodeValue;
    this.adminService.deletebook(name,deptyear).subscribe();
    location.reload();
  }
  search(){
    this.isfound=false;
    var deptyear=(<HTMLInputElement>document.getElementById("search")).value;
    this.wholebooks=[];
    for(let i=0;i<this.clonedata.length;i++){
      if(this.clonedata[i].deptyear==deptyear){
      this.wholebooks.push(this.clonedata[i]);
      this.isfound=true;
      }
    }
    if(!this.isfound)
    this.wholebooks=this.clonedata;
  }
}
