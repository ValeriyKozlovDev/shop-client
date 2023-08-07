import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [ItemComponent, CommonModule],
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items= [
    1, 2, 3, 4, 5, 6
  ]
}
