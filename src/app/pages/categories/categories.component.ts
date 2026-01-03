import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule]
})
export class CategoriesComponent {
  categories = [
    {
      id: 1,
      name: 'Screwdrivers',
      icon: 'pi pi-wrench',
      description: 'Precision tools for all screw types with magnetic tips',
      products: 42,
      image: 'assets/categories/screwdrivers.jpg'
    },
    {
      id: 2,
      name: 'Replacement Parts',
      icon: 'pi pi-mobile',
      description: 'Genuine OEM parts for all device models',
      products: 128,
      image: 'assets/categories/parts.jpg'
    },
    {
      id: 3,
      name: 'Repair Kits',
      icon: 'pi pi-box',
      description: 'Complete kits for specific device repairs',
      products: 26,
      image: 'assets/categories/kits.jpg'
    },
    {
      id: 4,
      name: 'Tools',
      icon: 'pi pi-cog',
      description: 'Professional tools for all repair needs',
      products: 64,
      image: 'assets/categories/tools.jpg'
    },
    {
      id: 5,
      name: 'Accessories',
      icon: 'pi pi-plug',
      description: 'Essential accessories for repair professionals',
      products: 38,
      image: 'assets/categories/accessories.jpg'
    },
    {
      id: 6,
      name: 'Batteries',
      icon: 'pi pi-bolt',
      description: 'High-capacity batteries for all devices',
      products: 52,
      image: 'assets/categories/batteries.jpg'
    }
  ];
}