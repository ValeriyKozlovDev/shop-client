import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule, SharedModule]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public links = [
    {
      link: '/',
      text: 'Contact Us',
    },
    {
      link: '/',
      text: 'About Us',
    },
    {
      link: '/',
      text: 'Privacy Policy',
    },
  ]


}
