import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class Navigation {
  constructor(private auth: AuthService) {}
  
  getMenuItems(): MenuItem[] {
    const baseItems: MenuItem[] = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        styleClass: 'font-medium'
      },
      {
        label: 'Products',
        icon: 'pi pi-list',
        styleClass: 'font-medium',
        items: [
          {
            label: 'All Products',
            icon: 'pi pi-th-large',
            routerLink: '/products'
          },
          {
            label: 'New Arrivals',
            icon: 'pi pi-star',
            routerLink: '/products/new'
          },
          {
            label: 'Best Sellers',
            icon: 'pi pi-fire',
            routerLink: '/products/best'
          },
          {
            label: 'On Sale',
            icon: 'pi pi-percentage',
            routerLink: '/products/sale'
          },
          {
            separator: true
          },
          {
            label: 'Premium Collection',
            icon: 'pi pi-crown',
            routerLink: '/products/premium'
          }
        ]
      },
      {
        label: 'Categories',
        icon: 'pi pi-tags',
        styleClass: 'font-medium',
        items: [
          {
            label: 'Screwdrivers',
            icon: 'pi pi-wrench',
            routerLink: '/category/screwdrivers'
          },
          {
            label: 'Replacement Parts',
            icon: 'pi pi-mobile',
            routerLink: '/category/parts'
          },
          {
            label: 'Repair Kits',
            icon: 'pi pi-box',
            routerLink: '/category/kits'
          },
          {
            label: 'Accessories',
            icon: 'pi pi-plug',
            routerLink: '/category/accessories'
          },
          {
            label: 'Tools',
            icon: 'pi pi-cog',
            routerLink: '/category/tools'
          }
        ]
      },
      {
        label: 'Brands',
        icon: 'pi pi-building',
        styleClass: 'font-medium',
        items: [
          {
            label: 'iRepair',
            icon: 'pi pi-star',
            routerLink: '/brand/irepair'
          },
          {
            label: 'TechPro',
            icon: 'pi pi-shield',
            routerLink: '/brand/techpro'
          },
          {
            label: 'MasterCraft',
            icon: 'pi pi-crown',
            routerLink: '/brand/mastercraft'
          }
        ]
      },
      {
        label: 'Resources',
        icon: 'pi pi-book',
        styleClass: 'font-medium',
        items: [
          {
            label: 'Repair Guides',
            icon: 'pi pi-file',
            routerLink: '/guides'
          },
          {
            label: 'Video Tutorials',
            icon: 'pi pi-video',
            routerLink: '/tutorials'
          },
          {
            label: 'Blog',
            icon: 'pi pi-pencil',
            routerLink: '/blog'
          },
          {
            separator: true
          },
          {
            label: 'Warranty Registration',
            icon: 'pi pi-shield',
            routerLink: '/warranty'
          }
        ]
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about',
        styleClass: 'font-medium'
      },
      {
        label: 'Contact',
        icon: 'pi pi-phone',
        routerLink: '/contact',
        styleClass: 'font-medium'
      }
    ];

    // Add account-related menu items based on authentication status
    if (this.auth.isAuthenticated()) {
      baseItems.push({
        label: 'Account',
        icon: 'pi pi-user',
        styleClass: 'font-medium',
        items: [
          {
            label: 'My Profile',
            icon: 'pi pi-id-card',
            routerLink: '/account'
          },
          {
            label: 'My Orders',
            icon: 'pi pi-box',
            routerLink: '/account/orders'
          },
          {
            label: 'Wishlist',
            icon: 'pi pi-heart',
            routerLink: '/account/wishlist'
          },
          {
            separator: true
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.auth.logout()
          }
        ]
      });
    } else {
      baseItems.push({
        label: 'Account',
        icon: 'pi pi-user',
        styleClass: 'font-medium',
        items: [
          {
            label: 'Login',
            icon: 'pi pi-sign-in',
            routerLink: '/login'
          },
          {
            label: 'Sign Up',
            icon: 'pi pi-user-plus',
            routerLink: '/signup'
          }
        ]
      });
    }

    return baseItems;
  }
}