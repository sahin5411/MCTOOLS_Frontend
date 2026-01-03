import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, InputTextarea, DropdownModule, CommonModule, FormsModule]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  };
  
  categories = [
    { name: 'General Inquiry', value: 'general' },
    { name: 'Product Support', value: 'support' },
    { name: 'Order Issue', value: 'order' },
    { name: 'Wholesale Inquiry', value: 'wholesale' },
    { name: 'Partnership', value: 'partnership' },
    { name: 'Other', value: 'other' }
  ];
  
  submitForm() {
    console.log('Form submitted:', this.contactForm);
    // In a real application, you would send this data to your backend
    alert('Thank you for your message! We will get back to you soon.');
  }
}