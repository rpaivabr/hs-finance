import { Component, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { FirestoreService } from "./firestore.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { DatePipe, JsonPipe } from "@angular/common";
import { Transaction } from "./transaction";
import { from } from "rxjs";

@Component({
  selector: 'app-login',
  imports: [DatePipe, JsonPipe],
  template: `
    <h1>Home Page</h1>
    <button (click)="logout()">Logout</button>

    <h2>Transactions</h2>
    @for (transaction of transactions(); track transaction.id) {
      <div>
        <p>ID: {{ transaction.id }}</p>
        <p>Amount: {{ transaction.value }}</p>
        <p>Date: {{ transaction.dateLimit | date:'dd/MM/yyyy' }}</p>
      </div>
    }
    <button (click)="create()">Generate transaction</button>

    <h2>Transaction ID: Wtmy7Oj3YxNl15quKn0s</h2>
    <p>{{ transaction() | json }}</p>
  `,
})
export class HomeComponent {
  private authService = inject(AuthService);
  private firestoreService = inject(FirestoreService);
  private router = inject(Router);

  transactions = toSignal(this.firestoreService.getAll(), { initialValue: [] });
  transaction = toSignal(this.firestoreService.get('Wtmy7Oj3YxNl15quKn0s'));

  logout() {
    this.authService.logout().then(() => {
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
      id: Math.random().toString(36).substring(2, 15)
    }
    this.firestoreService.create(transaction).then((data) => {
      console.log('Transaction created:', data);
    }).catch(error => {
      console.error('Error creating transaction:', error);
    });
  }
}