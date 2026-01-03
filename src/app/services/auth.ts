import { Injectable, signal } from '@angular/core';

export interface AuthUser {
  name: string;
  email: string;
  password?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'auth_user';
  user = signal<AuthUser | null>(this.loadUser());

  private loadUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private saveUser(user: AuthUser | null) {
    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify({ name: user.name, email: user.email }));
    } else {
      localStorage.removeItem(this.storageKey);
    }
    this.user.set(user ? { name: user.name, email: user.email } : null);
  }

  isAuthenticated(): boolean {
    return !!this.user();
  }

  signup(payload: { name: string; email: string; password: string }): { success: boolean; message?: string } {
    const existing = localStorage.getItem(`user_${payload.email}`);
    if (existing) {
      return { success: false, message: 'User already exists. Please login.' };
    }
    localStorage.setItem(`user_${payload.email}`, JSON.stringify(payload));
    this.saveUser({ name: payload.name, email: payload.email });
    return { success: true };
  }

  login(payload: { email: string; password: string }): { success: boolean; message?: string } {
    const raw = localStorage.getItem(`user_${payload.email}`);
    if (!raw) return { success: false, message: 'User not found. Please sign up.' };
    const user = JSON.parse(raw) as AuthUser & { password: string };
    if (user.password !== payload.password) return { success: false, message: 'Invalid credentials.' };
    this.saveUser({ name: user.name, email: user.email });
    return { success: true };
  }

  logout() {
    this.saveUser(null);
  }
}
