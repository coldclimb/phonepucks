import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  $cart:Array<{wood:string,width:string,notes:string}>
  cartFull:boolean=false;

  constructor() {
    this.$cart = []
  }


  getCart() {
    if (this.$cart) {
      return this.$cart
    } else {
      this.setCart([])
      return this.$cart
    }
  }

  setCart(c:any) {
    if (c === []){
      this.$cart = c
      return this.$cart
    } else {
    this.$cart.push(c)
    return this.$cart
    }
  }





}
