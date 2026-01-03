import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, DropdownModule, InputTextModule, PaginatorModule, CommonModule, FormsModule]
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Precision Screwdriver Set Pro',
      price: 89.99,
      originalPrice: 99.99,
      description: 'Complete set of 32 precision bits with magnetic tips and ergonomic handle design',
      image: 'assets/products/screwdriver-set.jpg',
      category: 'Screwdrivers',
      rating: 4.8,
      reviews: 128,
      inStock: true
    },
    {
      id: 2,
      name: 'Screen Protector Kit',
      price: 19.99,
      originalPrice: 24.99,
      description: 'Professional screen protector kit for various devices with installation tools',
      image: 'assets/products/screen-protector.jpg',
      category: 'Accessories',
      rating: 4.5,
      reviews: 86,
      inStock: true
    },
    {
      id: 3,
      name: 'Battery Replacement',
      price: 14.99,
      originalPrice: 19.99,
      description: 'High-capacity battery replacement for popular smartphone models',
      image: 'assets/products/battery.jpg',
      category: 'Replacement Parts',
      rating: 4.3,
      reviews: 214,
      inStock: true
    },
    {
      id: 4,
      name: 'Display Module',
      price: 49.99,
      originalPrice: 59.99,
      description: 'OEM quality display module for quick and reliable repairs',
      image: 'assets/products/display.jpg',
      category: 'Replacement Parts',
      rating: 4.7,
      reviews: 92,
      inStock: false
    },
    {
      id: 5,
      name: 'Repair Toolkit Pro',
      price: 129.99,
      originalPrice: 149.99,
      description: 'Complete professional repair toolkit with 65 pieces',
      image: 'assets/products/toolkit.jpg',
      category: 'Repair Kits',
      rating: 4.9,
      reviews: 76,
      inStock: true
    },
    {
      id: 6,
      name: 'Soldering Station',
      price: 89.99,
      originalPrice: 99.99,
      description: 'Professional soldering station with temperature control',
      image: 'assets/products/soldering.jpg',
      category: 'Tools',
      rating: 4.6,
      reviews: 54,
      inStock: true
    },
    {
      id: 7,
      name: 'Phone Opening Tools',
      price: 24.99,
      originalPrice: 29.99,
      description: 'Set of professional phone opening tools',
      image: 'assets/products/opening-tools.jpg',
      category: 'Tools',
      rating: 4.4,
      reviews: 103,
      inStock: true
    },
    {
      id: 8,
      name: 'Camera Module',
      price: 34.99,
      originalPrice: 39.99,
      description: 'High-quality camera module replacement',
      image: 'assets/products/camera.jpg',
      category: 'Replacement Parts',
      rating: 4.2,
      reviews: 67,
      inStock: true
    }
  ];
  
  categories = [
    { name: 'All Products', value: 'all' },
    { name: 'Screwdrivers', value: 'Screwdrivers' },
    { name: 'Replacement Parts', value: 'Replacement Parts' },
    { name: 'Repair Kits', value: 'Repair Kits' },
    { name: 'Tools', value: 'Tools' },
    { name: 'Accessories', value: 'Accessories' }
  ];
  
  sortOptions = [
    { name: 'Price: Low to High', value: 'price-low' },
    { name: 'Price: High to Low', value: 'price-high' },
    { name: 'Name: A to Z', value: 'name-asc' },
    { name: 'Name: Z to A', value: 'name-desc' },
    { name: 'Rating: High to Low', value: 'rating' }
  ];
  
  selectedCategory: any = 'all';
  selectedSort: any = 'rating';
  first = 0;
  rows = 8;
  filteredProducts: any[] = [];
  searchQuery: string = '';

  constructor() {
    this.filteredProducts = [...this.products];
    this.applyFilters();
  }

  onCategoryChange() {
    this.applyFilters();
  }

  onSortChange() {
    this.applyFilters();
  }

  onSearchChange() {
    this.applyFilters();
  }

  applyFilters() {
    // Start with all products
    let result = [...this.products];
    
    // Apply category filter
    if (this.selectedCategory !== 'all') {
      result = result.filter(product => product.category === this.selectedCategory);
    }
    
    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (this.selectedSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
    
    this.filteredProducts = result;
    this.first = 0; // Reset pagination when filters change
  }

  calculateDiscountPercentage(originalPrice: number, price: number): number {
    return Math.round((1 - price/originalPrice) * 100);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}