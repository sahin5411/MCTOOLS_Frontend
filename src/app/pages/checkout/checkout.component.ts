import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, InputMaskModule, RadioButtonModule, CheckboxModule, DropdownModule, CommonModule, FormsModule, DialogModule, LoginComponent, SignupComponent]
})
export class CheckoutComponent {
  constructor(public auth: AuthService) {}

  authVisible = false;
  authMode: 'login' | 'signup' = 'login';

  checkoutForm = {
    // Billing Information
    billing: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States'
    },
    
    // Shipping Information
    shipping: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      sameAsBilling: true
    },
    
    // Payment Information
    payment: {
      method: 'credit',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: ''
    }
  };
  
  orderSummary = {
    subtotal: 114.97,
    shipping: 0.00,
    tax: 9.20,
    total: 124.17
  };
  
  countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France'
  ];
  
  states = [
    'California',
    'Texas',
    'New York',
    'Florida',
    'Illinois',
    'Pennsylvania'
  ];
  
  paymentMethods = [
    { name: 'Credit Card', value: 'credit' },
    { name: 'PayPal', value: 'paypal' },
    { name: 'Apple Pay', value: 'apple' }
  ];
  
  cartItems = [
    {
      id: 1,
      name: 'Precision Screwdriver Set Pro',
      price: 89.99,
      quantity: 1,
      image: 'assets/products/screwdriver-set.jpg'
    },
    {
      id: 2,
      name: 'Screen Protector Kit',
      price: 19.99,
      quantity: 2,
      image: 'assets/products/screen-protector.jpg'
    },
    {
      id: 3,
      name: 'Battery Replacement',
      price: 14.99,
      quantity: 1,
      image: 'assets/products/battery.jpg'
    }
  ];
  
  placeOrder() {
    if (!this.auth.isAuthenticated()) {
      this.authMode = 'login';
      this.authVisible = true;
      return;
    }
    this.completeCheckout();
  }

  onAuthSuccess() {
    this.authVisible = false;
    this.completeCheckout();
  }

  switchMode(mode: 'login' | 'signup') {
    this.authMode = mode;
  }

  private completeCheckout() {
    console.log('Order placed:', this.checkoutForm);
    alert('Order placed successfully! Thank you for your purchase.');
    // In a real application, you would process the payment and send data to your backend
  }
}