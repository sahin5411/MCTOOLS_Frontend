import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
  
})
export class ProductService {
  
  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      {
        id: 1,
        name: 'Precision Screwdriver Set',
        description: 'Complete set of precision screwdrivers for all mobile devices',
        price: 29.99,
        category: 'tools',
        image: 'assets/products/screwdriver-set.jpg',
        inStock: true
      },
      {
        id: 2,
        name: 'Screen Protector Kit',
        description: 'Professional screen protector kit for various devices',
        price: 19.99,
        category: 'parts',
        image: 'assets/products/screen-protector.jpg',
        inStock: true
      },
      {
        id: 3,
        name: 'Battery Replacement',
        description: 'High-capacity battery replacement for popular models',
        price: 14.99,
        category: 'parts',
        image: 'assets/products/battery.jpg',
        inStock: false
      },
      {
        id: 4,
        name: 'Display Module',
        description: 'OEM quality display module for quick repairs',
        price: 49.99,
        category: 'parts',
        image: 'assets/products/display.jpg',
        inStock: true
      }
    ];
    
    return of(products);
  }
}
