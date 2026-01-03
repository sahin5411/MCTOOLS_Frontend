import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule]
})
export class SignupComponent {
  form = { name: '', email: '', password: '', confirm: '' };
  error = '';
  loading = false;
  showPassword = false;
  showConfirm = false;
  @Output() success = new EventEmitter<void>();

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.error = '';
    const name = this.form.name?.trim();
    const email = this.form.email?.trim();
    const password = this.form.password;
    const confirm = this.form.confirm;
    if (!name || !email || !password) {
      this.error = 'All fields are required';
      return;
    }
    if (name.length < 2) {
      this.error = 'Please enter your full name';
      return;
    }
    if (password.length < 6) {
      this.error = 'Password must be at least 6 characters';
      return;
    }
    if (password !== confirm) {
      this.error = 'Passwords do not match';
      return;
    }
    this.loading = true;
    const res = this.auth.signup({ name, email, password });
    this.loading = false;
    if (!res.success) {
      this.error = res.message || 'Signup failed';
      return;
    }
    if (this.success.observed) {
      this.success.emit();
      return;
    }
    this.router.navigateByUrl('/login');
  }
}
