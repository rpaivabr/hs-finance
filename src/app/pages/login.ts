import { Component, inject } from "@angular/core";
import { Auth } from "../services/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <h2>Login Page</h2>
    <p>Please log in to access the application.</p>
    <button (click)="login()">Login with Google</button>
  `,
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);

  login() {
    this.auth.login().then(() => {
      this.router.navigate(['/home']);
    });
  }
}