import { Component, inject } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
import { Firestore } from '../services/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe, JsonPipe } from '@angular/common';
import { Transaction } from '../models/transaction';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [DatePipe, JsonPipe, MatCardModule],
  template: `
    <h1>Home Page</h1>
    <button (click)="logout()">Logout</button>

    <h2>Transactions</h2>
    @for (transaction of transactions(); track transaction.id) {
    <div>
      <p>ID: {{ transaction.id }}</p>
      <p>Amount: {{ transaction.value }}</p>
      <p>Date: {{ transaction.dateLimit | date : 'dd/MM/yyyy' }}</p>
    </div>
    }
    <button (click)="create()">Generate transaction</button>

    <h2>Transaction ID: Wtmy7Oj3YxNl15quKn0s</h2>
    <p>{{ transaction() | json }}</p>
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        src="https://material.angular.dev/assets/img/examples/shiba2.jpg"
        alt="Photo of a Shiba Inu"
      />
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz
          breeds of dog from Japan. A small, agile dog that copes very well with
          mountainous terrain, the Shiba Inu was originally bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button matButton>LIKE</button>
        <button matButton>SHARE</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class Home {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  transactions = toSignal(this.firestore.getAll(), { initialValue: [] });
  transaction = toSignal(this.firestore.get('Wtmy7Oj3YxNl15quKn0s'));

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  create() {
    const transaction: Transaction = {
      value: Math.floor(Math.random() * 1000),
      dateLimit: new Date(),
      dateDone: new Date(),
      code: Math.random().toString(36).substring(2, 15),
      name: 'Generated transaction',
      type: 'expense',
      id: Math.random().toString(36).substring(2, 15),
    };
    this.firestore
      .create(transaction)
      .then((data) => {
        console.log('Transaction created:', data);
      })
      .catch((error) => {
        console.error('Error creating transaction:', error);
      });
  }
}
