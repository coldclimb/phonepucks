import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { woods, slots } from './options';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})


export class StoreComponent implements OnInit {

  constructor(

    ) {
  }

  cart:Array<{wood:string,width:string,notes:string}> = []
  cartCookie:string = ''
  cartFull:boolean=false;
  selectedWood:string = ''
  selectedSlot:string = ''
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

    wood: new FormControl(''),
    width: new FormControl(''),
    notes: new FormControl('')

  })


  amISelectedWood(woodType:string) {
    if (this.selectedWood === woodType) {
      return 'woodSelected'
    } else {
      return 'woodSelect'
    }
  }

  amISelectedWidth(width:string) {
    if (this.selectedSlot === width) {
      return 'woodSelected'
    } else {
      return 'woodSelect'
    }
  }

  addToCart(w:string, s:string, n:string) {
    //Todo: Add the selected puck to cart
    this.cart.push({wood: w, width: s, notes: n})

    this.cartFull = true;
  }

  removeFromCart(item:any) {
    let i = this.cart.indexOf(item)
    this.cart.splice(i, 1)
    if(this.cart.length === 0) {
      this.cartFull = false
    }
  }

  woodImage(wood:string) {
    let v:any = woods.find(w => w.type === wood)
    this.cartImage = v.img
    return this.cartImage
  }





}
