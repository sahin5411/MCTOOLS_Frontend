import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule]
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'Precision Screwdriver Set Pro',
      price: '₹809.99',
      description: 'Complete set of 32 precision bits with magnetic tips and ergonomic handle design',
      image: 'https://www.lematec-tools.com/images/70950',
      category: 'Screwdrivers'
    },
    {
      id: 2,
      name: 'Screen Protector Kit',
      price: '₹1999.99',
      description: 'Professional screen protector kit for various devices with installation tools',
      image: 'https://gsmtoolsindia.com/wp-content/uploads/2025/12/img_3725.jpeg',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Battery Replacement',
      price: '₹1444.99',
      description: 'High-capacity battery replacement for popular smartphone models',
      image: 'https://www.diyfixtool.com/cdn/shop/articles/iPhone-16e-Battery-USB-C-Port_1_aaf6ffdc-1879-4113-a901-52d4e2405279.jpg?v=1752548770',
      category: 'Replacement Parts'
    },
    {
      id: 4,
      name: 'Display Module',
      price: '₹2009.99',
      description: 'OEM quality display module for quick and reliable repairs',
      image: 'https://www.advance-institute.in/images/mobile-repairing-training.jpg',
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
      icon: 'pi pi-microchip',
      description: 'Genuine OEM parts for all device models'
    },
    {
      name: 'Repair Kits',
      icon: 'pi pi-box',
      description: 'Complete kits for specific device repairs'
    },
    {
      name: 'Accessories',
      icon: 'pi pi-mobile',
      description: 'Essential accessories for mobile repair and maintenance'
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