import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <div class="container">
      <main>
        <router-outlet />
      </main>
      <app-navbar />
    </div>
  `,
  styles: `
  main {
    height: calc(100vh - 60px);
    padding: 0 10px 10px 10px;
    overflow: auto;
  }
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 960px;
    }
  }
  `
})
export class App {
  protected readonly title = signal('hs-finance');
}
