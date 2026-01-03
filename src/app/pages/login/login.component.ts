import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, RouterModule]
})
export class LoginComponent {
  form = { email: '', password: '' };
  error = '';
  loading = false;
  showPassword = false;
  @Output() success = new EventEmitter<void>();

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.error = '';
    const email = this.form.email?.trim();
    const password = this.form.password;
    if (!email || !password) {
      this.error = 'Email and password are required';
      return;
    }
    this.loading = true;
    const res = this.auth.login({ email, password });
    this.loading = false;
    if (!res.success) {
      this.error = res.message || 'Login failed';
      return;
    }
    if (this.success.observed) {
      this.success.emit();
      return;
    }
    this.router.navigateByUrl('/');
  }
}
