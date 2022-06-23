import { Component, OnInit } from '@angular/core';

import { render } from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() {
    render(
      {
        id: "#PayPalButtons",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successful");
        }
      }
    )
  }



  ngOnInit(): void {

  }


}



