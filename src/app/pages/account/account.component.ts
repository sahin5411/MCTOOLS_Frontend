import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [Header, CardModule, ButtonModule, InputTextModule, TabViewModule, InputSwitchModule, CommonModule, FormsModule]
})
export class AccountComponent {
  activeTab: number = 0;
  
  userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    joinDate: '2022-03-15'
  };
  
  billingAddress = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Tech Street',
    city: 'Electronics City',
    state: 'California',
    zipCode: '90210',
    country: 'United States'
  };
  
  shippingAddress = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Tech Street',
    city: 'Electronics City',
    state: 'California',
    zipCode: '90210',
    country: 'United States'
  };
  
  orders = [
    {
      id: 'ORD-001',
      date: '2023-10-15',
      status: 'Delivered',
      total: 124.99,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2023-09-22',
      status: 'Delivered',
      total: 89.99,
      items: 1
    },
    {
      id: 'ORD-003',
      date: '2023-08-05',
      status: 'Delivered',
      total: 149.99,
      items: 2
    }
  ];
  
  wishlist = [
    {
      id: 1,
      name: 'Professional Soldering Station',
      price: 89.99,
      image: 'assets/products/soldering.jpg'
    },
    {
      id: 2,
      name: 'Advanced Display Module',
      price: 79.99,
      image: 'assets/products/display-advanced.jpg'
    }
  ];
  
  updateProfile() {
    console.log('Profile updated:', this.userProfile);
    alert('Profile updated successfully!');
  }
  
  updateBillingAddress() {
    console.log('Billing address updated:', this.billingAddress);
    alert('Billing address updated successfully!');
  }
  
  updateShippingAddress() {
    console.log('Shipping address updated:', this.shippingAddress);
    alert('Shipping address updated successfully!');
  }
}