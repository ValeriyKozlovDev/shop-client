import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [SharedModule, CommonModule],
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
