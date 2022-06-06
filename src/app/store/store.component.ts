import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { woods, slots } from './options';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})


export class StoreComponent implements OnInit {

  constructor() {
  }

  cartFull:boolean=false;
  selectedWood:string = ''

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
    width: new FormControl(slots),
    notes: new FormControl('')

  })


  addToCart() {
    //Todo: Add the selected puck to cart

    this.cartFull = true;
  }





}
