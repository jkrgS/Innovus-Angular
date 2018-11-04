import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private authServise: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.loggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  // Login the user "Mock"
  login(model: any) {
    this.authServise.login(model);
    this.router.navigate(['/home']);
  }

  // checking if user is logged in
  loggedIn() {
    return this.authServise.loggedIn();
  }

}
