import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {
  product: any;
  breakpoint: number;
  breakpoint1: number;
  constructor() { 
    this.product= JSON.parse(localStorage.getItem('product')|| '[]');
    console.log(this.product)
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 425) ? 1 : 4;
    this.breakpoint1 = (window.innerWidth <= 425) ? 1 : 3;
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 425) ? 1 : 4;
    this.breakpoint1 = (event.target.innerWidth <= 425) ? 1 : 3;
  }

}
