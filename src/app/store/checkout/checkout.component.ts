import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CartService } from '../cart.service';
import { OrdersService } from 'src/app/orders.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy{

  paymentHandler: any = null;
  checkoutPrice:string = JSON.stringify((this.cartService.$cart.length)*20)
  addressForm!:FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public anyVariable:any,
    public cartService: CartService,
    public ordersService: OrdersService,
    ) { }

  ngOnInit(): void  {
    this.invokeStripe();

    this.addressForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    })
  }

  ngOnDestroy(): void {
  }



  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LLUQsEKKknizqKh0dPgmH5qOeCktQ4rPC0ikQLiiu3dUkQDzcXdDAr4BaN02VHyyEBm1rjJwEfMl3AB5W8maeWF003dPTaBhI',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'PhonePucks.com',
      description: `${this.cartService.$cart.length} phone pucks`,
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LLUQsEKKknizqKh0dPgmH5qOeCktQ4rPC0ikQLiiu3dUkQDzcXdDAr4BaN02VHyyEBm1rjJwEfMl3AB5W8maeWF003dPTaBhI',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }



}



