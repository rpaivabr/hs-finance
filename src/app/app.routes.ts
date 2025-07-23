import { CanActivateFn, Router, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';

const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLogged$.pipe(
    map(isLogged => isLogged ? true : router.parseUrl('/login'))
  );
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/' },
];
