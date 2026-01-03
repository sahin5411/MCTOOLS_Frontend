import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule]
})
export class AboutComponent {
  teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'assets/team/john.jpg',
      bio: '20+ years in mobile repair industry'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      image: 'assets/team/sarah.jpg',
      bio: 'Former Apple repair specialist'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Technician',
      image: 'assets/team/michael.jpg',
      bio: 'Certified repair expert'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Customer Success',
      image: 'assets/team/emily.jpg',
      bio: 'Dedicated to customer satisfaction'
    }
  ];
  
  values = [
    {
      title: 'Quality First',
      description: 'We only offer tools that meet our rigorous quality standards',
      icon: 'pi pi-check-circle'
    },
    {
      title: 'Customer Focus',
      description: 'Your success is our success. We\'re here to support you',
      icon: 'pi pi-heart'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our products and services',
      icon: 'pi pi-lightbulb'
    },
    {
      title: 'Integrity',
      description: 'Honest business practices and transparent communication',
      icon: 'pi pi-shield'
    }
  ];
  
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}