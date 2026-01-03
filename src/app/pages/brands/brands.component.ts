import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  standalone: true,
  imports: [Header, CardModule, ButtonModule, CommonModule]
})
export class BrandsComponent {
  brands = [
    {
      id: 1,
      name: 'iRepair',
      logo: 'assets/brands/irepair.png',
      description: 'Premium tools for professional technicians',
      products: 86
    },
    {
      id: 2,
      name: 'TechPro',
      logo: 'assets/brands/techpro.png',
      description: 'Innovative solutions for modern repairs',
      products: 124
    },
    {
      id: 3,
      name: 'MasterCraft',
      logo: 'assets/brands/mastercraft.png',
      description: 'Crafted for durability and precision',
      products: 68
    },
    {
      id: 4,
      name: 'ProFix',
      logo: 'assets/brands/profix.png',
      description: 'Reliable tools trusted by experts',
      products: 42
    },
    {
      id: 5,
      name: 'MobileMend',
      logo: 'assets/brands/mobilemend.png',
      description: 'Specialized solutions for mobile repairs',
      products: 36
    },
    {
      id: 6,
      name: 'ScrewTech',
      logo: 'assets/brands/screwtech.png',
      description: 'Precision screwdrivers and accessories',
      products: 28
    }
  ];
}