import { Injectable } from '@angular/core';

import { CartService } from './store/cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private cartService: CartService) { }

cart:any

makeOrder() {
  this.cart = this.cartService.getCart
  
}



}
