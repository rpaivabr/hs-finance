import { CanActivateFn, Router, Routes } from '@angular/router';
import { Auth } from './services/auth';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Transactions } from './pages/transactions';
import { Reports } from './pages/reports';
import { Settings } from './pages/settings';

const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  return auth.isLogged$.pipe(
    map(isLogged => isLogged ? true : router.parseUrl('/login'))
  );
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'transactions', component: Transactions, canActivate: [authGuard] },
  { path: 'reports', component: Reports, canActivate: [authGuard] },
  { path: 'settings', component: Settings, canActivate: [authGuard] },
  { path: '**', redirectTo: '/' },
];
