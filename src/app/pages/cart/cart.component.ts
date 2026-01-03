import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [Header, CardModule, ButtonModule, InputNumberModule, CommonModule, FormsModule]
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      name: 'Precision Screwdriver Set Pro',
      price: 89.99,
      quantity: 1,
      image: 'assets/products/screwdriver-set.jpg',
      category: 'Screwdrivers'
    },
    {
      id: 2,
      name: 'Screen Protector Kit',
      price: 19.99,
      quantity: 2,
      image: 'assets/products/screen-protector.jpg',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Battery Replacement',
      price: 14.99,
      quantity: 1,
      image: 'assets/products/battery.jpg',
      category: 'Replacement Parts'
    }
  ];
  
  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  getTax(): number {
    return this.getSubtotal() * 0.08; // 8% tax
  }
  
  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
  
  updateQuantity(itemId: number, quantity: number) {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }
  
  removeItem(itemId: number) {
    this.cartItems = this.cartItems.filter(i => i.id !== itemId);
  }
  
  checkout() {
    alert('Proceeding to checkout!');
    // In a real application, you would navigate to the checkout page
  }
}