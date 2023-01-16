import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { VarsService } from 'src/app/services/vars/vars.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss'],
 
})
export class SearchesComponent implements OnInit, OnDestroy {
  url: any;
  productEvent: any ;
  products: any;
  categories: any [];

  constructor(
    public router:Router,
    public api: ApiService,
    public vars: VarsService
    ) {
    this.url = this.router.events.subscribe((event) => {
      if (event instanceof  NavigationEnd ) {
        this.router.navigated = false;
      }
    });
    this.productEvent= this.router.getCurrentNavigation() ;
    if(this.productEvent.extras !==""){
      this.getProducts(this.productEvent.extras)
    }
  
  }

  ngOnInit(): void {
   
  }

  getProducts(search: string){
    this.api.getProducts(search).then(response =>{
      if(response.results.length > 0){
        this.products=this.api.get4Products(response.results);  
        this.categories= this.products[0].categories[0];
      }
  
    });
   
  }

  goToDetail(product: any[]){
    let id= product['items'][0]['id'];
    localStorage.setItem('product',JSON.stringify(product));
    this.router.navigate(['items',id]);
  }


  ngOnDestroy() {
    if (this.url) {
      this.url.unsubscribe();
    }
  }

}
