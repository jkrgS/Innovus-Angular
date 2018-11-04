import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username = <any>[];
  navRoutes = [
    { linkName: 'Home', url: '/home' },
    { linkName: 'Contact Me', url: '/contact-me' },
  ];

  constructor(private authServise: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
  }

  // checking if user is logged in
  loggedIn() {
    this.username = localStorage.getItem('username');
    return this.authServise.loggedIn();
  }

  logout() {
    this.authServise.logout();
  }

}
