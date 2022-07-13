import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { render } from 'creditcardpayments/creditCardPayments'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy{

  constructor(
    @Inject(MAT_DIALOG_DATA) public anyVariable:any,
    public cartService: CartService,
    ) {

  }

  checkoutPrice:string = JSON.stringify((this.cartService.$cart.length)*20)

  ngOnInit(): void  {
    console.log('Loaded the Checkout component')
    render(
      {
        id: "#PayPalButtons",
        currency: "USD",
        value: this.checkoutPrice,
        onApprove: (details) => {
          details = this.cartService.$cart;
          this.AddOrderToDatabase(details);
          alert("Transaction Successful");
        }
      }
    )
  }

  ngOnDestroy(): void {
    console.log('Destroyed the Checkout Component')
  }

  AddOrderToDatabase(details:any) {
    console.log(details);
    console.log('Order added to Database');
  }



}



