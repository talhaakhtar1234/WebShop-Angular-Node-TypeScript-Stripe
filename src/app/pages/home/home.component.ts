import { Component, OnInit } from '@angular/core';
const ROWS_HEIGHT:{[id:number]:number}={1:400,3:355,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cols=3;
  rowHeight=ROWS_HEIGHT[this.cols]
  category:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsChange(columns:number){
    this.cols=columns;
    this.rowHeight=ROWS_HEIGHT[this.cols]
  }


  onShowCategory(newCategory: string) {
    this.category=newCategory
    }

}
