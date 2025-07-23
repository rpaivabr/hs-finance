import { Component, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <h1>Login Page</h1>
    <p>Please log in to access the application.</p>
    <button (click)="login()">Login with Google</button>
  `,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.login().then(() => {
      this.router.navigate(['/home']);
    });
  }
}