import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'

import { CartService } from './cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { woods, slots } from './options';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})


export class StoreComponent implements OnInit {


  constructor(
    public cartService: CartService,
    private matDialog: MatDialog
    ) {
  }

  cartImage:string = ''

  ngOnInit() {
    
  }

  woods() {
    return woods;
  }

  slots() {
    return slots;
  }



  puckBuilder = new FormGroup({
    wood: new FormControl('', Validators.required),
    width: new FormControl('', Validators.required),
    notes: new FormControl('')
  })


  amISelectedWood(woodType:string) {
    if (this.puckBuilder.controls.wood.value === woodType) {
      return 'woodSelected'
    } else {
      return 'woodSelect'
    }
  }

  amISelectedWidth(width:string) {
    if (this.puckBuilder.controls.width.value === width) {
      return 'woodSelected'
    } else {
      return 'woodSelect'
    }
  }

  addToCart(w:string, s:string, n:string) {
    this.cartService.setCart({wood: w, width: s, notes: n})
    this.cartService.getCart()
    this.cartService.cartFull = true;
  }

  removeFromCart(item:any) {
    let i = this.cartService.$cart.indexOf(item)
    this.cartService.$cart.splice(i, 1)
    if(this.cartService.$cart.length === 0) {
      this.cartService.cartFull = false
    }
  }

  woodImage(wood:string) {
    let v:any = woods.find(w => w.type === wood)
    this.cartImage = v.img
    return this.cartImage
  }

  openModal() {
    this.matDialog.open(CheckoutComponent, {
      "width": '500px',
      "maxHeight": '90vh',
      "panelClass": 'checkoutStyles',
      "autoFocus": false
    });
  }

  closeTheCart() {
    console.log('running closeTheCart')
    this.matDialog.closeAll()
  }


}
