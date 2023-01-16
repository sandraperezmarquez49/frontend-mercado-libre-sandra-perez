import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarsService {
  public dbUrlProducts = 'https://api.mercadolibre.com/sites/MLA/search?q=:';
  public dbUrlDescription= 'https://api.mercadolibre.com/items/';
  public dbUrlCategories= 'https://api.mercadolibre.com/categories/';

  constructor() {}


}
