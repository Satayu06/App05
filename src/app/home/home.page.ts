import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  items=[
    {
      id:1,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
      imageURL: 'https://image.made-in-china.com/202f0j00qoykHmVhMLcb/Professional-Laptop-Computer-14-15-6-Pocket-Laptop-Portable-Office-Retail-Notebooks-Thin-All-in-One-PC-High-Speed-Stock-Notebook-Keyboard-Laptops.jpg',
    },
    {
      id:2,
      name:'Product B',
      price: 250,
      detail:'this is a product B',
      imageURL: 'https://www.uboncomputer.co.th/pub/media/catalog/product/cache/566bac40c34e1b79304197de40a22c99/1/_/1_465_2.jpg',
    },
    {
      id:3,
      name:'Product C',
      price: 300,
      detail:'this is a product C',
      imageURL: 'https://media-cdn.bnn.in.th/361201/hp-notebook-14-ep0122tu-silver-1-square_medium.jpg',
    },
    {
      id:4,
      name:'Product D',
      price: 350,
      detail:'this is a product D',
      imageURL: 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/product30882_800.jpg',
    }
  ]
}
