import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode=false;
  constructor() { }

  ngOnInit(): void {
  }
   // Set this to your desired value

  // Dynamic product details
  productImageUrl: string = "http://via.placeholder.com/150";
  productName: string = "Shoes";
  productType: string = "Sneakers";
  productDescription: string = "This is a fantastic pair of sneakers with amazing features!";
  productPrice: number = 150;
}
