import { Injectable } from '@angular/core';
import { VarsService } from '../vars/vars.service'
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
		private vars: VarsService
  ) { }
  dbUrlP = this.vars.dbUrlProducts;
  dbUrlD= this.vars.dbUrlDescription;
  dbUrlC= this.vars.dbUrlCategories;

  httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json'
		})
	}

	getProducts(query:string){
		return new Promise<any>((resolve, reject) => {
			const path = this.dbUrlP+query
			return this.http.get(path,this.httpOptions).subscribe(data =>{
			  if(data){
				  resolve(data);
			  }
		  }) 
	  })

	}

  getDescriptionId(id:string){
		return new Promise<any>((resolve, reject) => {
			const path = this.dbUrlD+id+'/description'
			return this.http.get(path,this.httpOptions).subscribe(data =>{
			  if(data){
				  resolve(data);
			  }
		  }) 
	  })
  }

  getCategories(id:string){
		return new Promise<any>((resolve, reject) => {
			const path = this.dbUrlC+id
			return this.http.get(path,this.httpOptions).subscribe(data =>{
			  if(data){
				  resolve(data);
			  }
		  }) 
	  })
    
  }
  getTypec(category_id: any){
    let category: any[]= []
    this.getCategories(category_id).then((response)=>{
      category.push(response.path_from_root)
    });
    return category
  }

  getDescritions(id: string){
    let description: any[]= []
    this.getDescriptionId(id).then((response)=>{
      description.push(response.plain_text)
    });
    return description;
  }


   get4Products(products:any){
    const childrens: { author: { name: string; lastname: string; };
      categories:any;
      items: { id: string; title: string; 
      price: { currency: string; amount: number; decimals: number; }; 
      picture: string; condition: string; free_shipping: boolean; }[]; 
      sold_quantity:number; seller_address:any; description:any}[] = [];

    var products4 = products.slice(0,4);
    products4.map((children: any) => {
      let categories=this.getTypec(children.category_id);
      let description= this.getDescritions( children.id);
      childrens.push({
        "author": {
          "name": "Sandra",
          "lastname": "Pérez"
        },
        "categories": [categories],
        "items": [
          {
            "id": children.id,
            "title": children.title,
            "price": {
              "currency": children.currency_id,
              "amount": children.price,
              "decimals": 2
            },
            "picture": children.thumbnail,
            "condition": children.condition,
            "free_shipping": children.shipping.free_shipping
          },
        ],
        "sold_quantity": children.sold_quantity,
        "seller_address": children.seller_address,
        "description": description
      });
    })
    return  childrens;
    
  } 
  
  

}
