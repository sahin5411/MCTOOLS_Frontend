import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Navigation } from '../services/navigation';
import { CartService } from '../services/cart';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

// PrimeNG Modules
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { LoginComponent } from '../pages/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [MenubarModule, ButtonModule, InputTextModule, CommonModule, FormsModule, RouterModule, SidebarModule, DialogModule, LoginComponent]
})
export class Header implements OnInit, AfterViewInit, OnDestroy {
  menuItems: MenuItem[] = [];
  cartItemCount: number = 3; // For demo purposes
  searchQuery: string = '';
  cartVisible: boolean = false;
  loginVisible: boolean = false;
  showUserMenu: boolean = false;
  private lastScrollTop: number = 0;
  private scrollListener: any;
  private isBrowser: boolean;
  private ticking: boolean = false;
  
  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private navigationService: Navigation,
    private cartService: CartService,
    public auth: AuthService,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  ngOnInit() {
    this.menuItems = this.navigationService.getMenuItems();
    // For demo purposes, we'll use a static count
    // In a real app, you would subscribe to the cart service:
    // this.cartService.cart$.subscribe(
    //   (items: any[]) => this.cartItemCount = items.reduce((count: number, item: any) => count + item.quantity, 0)
    // );
  }

  ngAfterViewInit() {
    // Add scroll listener only in browser
    if (this.isBrowser) {
      // Use setTimeout to ensure the DOM is fully rendered
      setTimeout(() => {
        this.scrollListener = this.onScroll.bind(this);
        window.addEventListener('scroll', this.scrollListener, { passive: true });
      }, 0);
    }
  }

  ngOnDestroy() {
    // Remove scroll listener only in browser
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  onScroll() {
    if (!this.isBrowser) return;
    
    // Use requestAnimationFrame to optimize scroll performance
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateHeaderVisibility();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private updateHeaderVisibility() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Get the header element
    const headerElement = this.elementRef.nativeElement;
    
    // Add/remove scrolled-down class to header with threshold to prevent blinking
    if (currentScrollTop > 100) {
      if (currentScrollTop > this.lastScrollTop + 5) {
        // Scrolling down - hide nav
        if (headerElement) {
          headerElement.classList.add('scrolled-down');
        }
      } else if (currentScrollTop < this.lastScrollTop - 5) {
        // Scrolling up - show nav
        if (headerElement) {
          headerElement.classList.remove('scrolled-down');
        }
      }
    } else {
      // Near top - always show nav
      if (headerElement) {
        headerElement.classList.remove('scrolled-down');
      }
    }
    
    this.lastScrollTop = currentScrollTop;
  }

  onSearch() {
    const q = this.searchQuery?.trim();
    if (!q) return;
    console.log('Search:', q);
    this.router.navigate(['/products'], { queryParams: { search: q } });
  }

  openCart() {
    this.cartVisible = true;
  }

  closeCart() {
    this.cartVisible = false;
  }

  get userInitials(): string {
    const u = this.auth.user();
    if (!u?.name) return 'U';
    return u.name
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  openLogin() {
    this.loginVisible = true;
  }

  closeLogin() {
    this.loginVisible = false;
  }
  
  onLoginSuccess() {
    this.loginVisible = false;
    // Optionally, navigate to a specific page after login
    this.router.navigate(['/account']);
  }
  
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
  
  // Close user menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative.group')) {
      this.showUserMenu = false;
    }
  }
}