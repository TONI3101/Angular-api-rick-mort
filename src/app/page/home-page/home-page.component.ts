import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  value?: Date;

  value2: number = 15;


  constructor() { }

  ngOnInit(): void {
  }

}
