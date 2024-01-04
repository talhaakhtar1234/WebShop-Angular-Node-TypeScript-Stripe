import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cols=3;
  category:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsChange(columns:number){
    this.cols=columns;
  }


  onShowCategory(newCategory: string) {
    this.category=newCategory
    }

}
