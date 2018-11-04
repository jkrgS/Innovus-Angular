import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(model: any) {
    localStorage.setItem('username', model.username);
    localStorage.setItem('password', model.password);
  }

  loggedIn() {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    this.router.navigate(['/login']);
  }
}
