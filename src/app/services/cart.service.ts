import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=new BehaviorSubject<Cart>({items:[]})

  constructor(private _snackBar:MatSnackBar) { }


  addToCart(item: CartItem):void{
    const items=[...this.cart.value.items];

    const itemsCart=items.find((_item)=>{
      _item.id===item.id
    })

    if(itemsCart){
      itemsCart.quantity+=1
    } else{
      items.push(item)
    }
  }
}
