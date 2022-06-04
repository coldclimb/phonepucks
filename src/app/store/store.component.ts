import { Component, OnInit } from '@angular/core';

import { woods } from './woods';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})


export class StoreComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  woods() {
    return woods
  }

}
