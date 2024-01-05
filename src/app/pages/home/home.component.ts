import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
const ROWS_HEIGHT:{[id:number]:number}={1:400,3:355,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {


  cols=3;
  rowHeight=ROWS_HEIGHT[this.cols]
  category:string | undefined;
  products:Array<Product> | undefined;
  sort='desc';
  count='12';
  productsSubscription:Subscription | undefined;
  constructor(private cartService:CartService,private storeService:StoreService) { }


  ngOnInit(): void {
    this.getProducts()
  }
  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe();
    }
  }
  getProducts() :void{
    this.storeService.getAllProduct(this.count,this.sort).subscribe((_products)=>{
      this.products=_products
    })

  }

  onColumnsChange(columns:number){
    this.cols=columns;
    this.rowHeight=ROWS_HEIGHT[this.cols]
  }


  onShowCategory(newCategory: string) {
    this.category=newCategory
    }


    onAddToCart(product:Product):void{

      this.cartService.addToCart({
        product:product.image,
        name:product.title,
        price:product.price,
        quantity:1,
        id:product.id
      })

    }

}
