import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productTableHeaders =["S.No","Product Name","Price"];
  products=[{
id:1,
price:"1000",
name:"iPad"
  },
  {
id:1,
price:"1000",
name:"Mobile"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}