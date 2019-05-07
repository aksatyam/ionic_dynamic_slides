import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Pizza',
      products: [
        { id: 0, name: 'Salami', price: '8' },
        { id: 1, name: 'Classic', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' },
        { id: 4, name: 'Salami', price: '8' },
        { id: 5, name: 'Classic', price: '5' },
        { id: 6, name: 'Tuna', price: '9' },
        { id: 7, name: 'Hawai', price: '7' }
      ]
    },
    {
      category: 'Pasta',
      products: [
        { id: 8, name: 'Mac & Cheese', price: '8' },
        { id: 9, name: 'Bolognese', price: '6' },
        { id: 10, name: 'Ham & Egg', price: '8' },
        { id: 11, name: 'Basic', price: '5' },
        { id: 12, name: 'Ceaser', price: '9' },
        { id: 13, name: 'Ham & Egg', price: '8' },
        { id: 14, name: 'Basic', price: '5' },
        { id: 15, name: 'Ceaser', price: '9' }
      ]
    },
    {
      category: 'Salad',
      products: [
        { id: 16, name: 'Ham & Egg', price: '8' },
        { id: 17, name: 'Basic', price: '5' },
        { id: 18, name: 'Ceaser', price: '9' },
        { id: 19, name: 'Ham & Egg', price: '8' },
        { id: 20, name: 'Basic', price: '5' },
        { id: 21, name: 'Ceaser', price: '9' },
        { id: 22, name: 'Ham & Egg', price: '8' },
        { id: 23, name: 'Basic', price: '5' },
        { id: 24, name: 'Ceaser', price: '9' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}