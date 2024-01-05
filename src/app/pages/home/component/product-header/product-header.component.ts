import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {

  @Output () columnsCountChange=new EventEmitter<number>()
  @Output () itemsCountChange=new EventEmitter<number>()
  @Output () sortChange=new EventEmitter<string>()

  sort = 'desc';
  itemsShowCount: number = 12;
  constructor() { }

  ngOnInit(): void {
  }


  onSortUpdated(newSort: string): void {
    this.sort = newSort
    this.sortChange.emit(newSort)
  }

  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count)

  }



  onColumnsUpdated(column:number):void{
    this.columnsCountChange.emit(column)
  }
}
