import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/">Home</a>
      <a routerLink="/transactions">Transações</a>
      <a routerLink="/">+</a>
      <a routerLink="/reports">Relatórios</a>
      <a routerLink="/settings">Configurações</a>
    </nav>
  `,
  styles: `
    .navbar {
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid #ccc;
    }
    .navbar a {
    }
  `
})
export class Navbar {

}
