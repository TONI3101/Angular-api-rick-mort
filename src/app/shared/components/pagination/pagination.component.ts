
import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page: number = 1;

  @Output() nextPage = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  suma(){
    if(this.page < 40)
    this.page++
    this.nextPage.emit(this.page)

  }

  resta(){
    if(this.page > 1 )
    this.page--
    this.nextPage.emit(this.page)

  }



}
