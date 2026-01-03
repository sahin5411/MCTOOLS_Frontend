import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: CartItem) {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      const updatedCart = currentCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      this.cartSubject.next(updatedCart);
    } else {
      this.cartSubject.next([...currentCart, { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(itemId: number) {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter(item => item.id !== itemId);
    this.cartSubject.next(updatedCart);
  }

  updateQuantity(itemId: number, quantity: number) {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    this.cartSubject.next(updatedCart);
  }

  getCartTotal(): number {
    return this.cartSubject.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getCartItemCount(): number {
    return this.cartSubject.value.reduce(
      (count, item) => count + item.quantity,
      0
    );
  }

  clearCart() {
    this.cartSubject.next([]);
  }
}