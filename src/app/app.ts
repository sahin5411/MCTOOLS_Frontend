import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [Header, CardModule, ButtonModule, CommonModule, RouterOutlet]
})
export class App {
  protected readonly title = signal('MC TOOLS');
  
  featuredProducts = [
    {
      id: 1,
      name: 'Precision Screwdriver Set Pro',
      price: '$89.99',
      description: 'Complete set of 32 precision bits with magnetic tips and ergonomic handle design',
      image: 'assets/products/screwdriver-set.jpg',
      category: 'Screwdrivers'
    },
    {
      id: 2,
      name: 'Screen Protector Kit',
      price: '$19.99',
      description: 'Professional screen protector kit for various devices with installation tools',
      image: 'assets/products/screen-protector.jpg',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Battery Replacement',
      price: '$14.99',
      description: 'High-capacity battery replacement for popular smartphone models',
      image: 'assets/products/battery.jpg',
      category: 'Replacement Parts'
    },
    {
      id: 4,
      name: 'Display Module',
      price: '$49.99',
      description: 'OEM quality display module for quick and reliable repairs',
      image: 'assets/products/display.jpg',
      category: 'Replacement Parts'
    }
  ];
  
  categories = [
    {
      name: 'Screwdrivers',
      icon: 'pi pi-wrench',
      description: 'Precision tools for all screw types with magnetic tips'
    },
    {
      name: 'Replacement Parts',
      icon: 'pi pi-mobile',
      description: 'Genuine OEM parts for all device models'
    },
    {
      name: 'Repair Kits',
      icon: 'pi pi-box',
      description: 'Complete kits for specific device repairs'
    }
  ];
  
  testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Mobile Repair Technician',
      content: 'The precision tools from MC TOOLS have completely transformed my repair business. Quality is unmatched!',
      rating: 5,
      initials: 'JD'
    },
    {
      id: 2,
      name: 'Alice Smith',
      role: 'Tech Enthusiast',
      content: 'Fast shipping and excellent customer service. My go-to store for all mobile repair needs.',
      rating: 5,
      initials: 'AS'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Repair Shop Owner',
      content: 'Consistent quality and competitive prices. Been a customer for over 3 years and never disappointed.',
      rating: 4.5,
      initials: 'RJ'
    }
  ];
}