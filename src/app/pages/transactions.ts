import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transactions',
  imports: [MatFormFieldModule, MatCardModule, MatInputModule],
  template: `
      <h2>Transações</h2>
      <div class="section">
        <!-- Campo de busca -->
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Procurar conta</mat-label>
          <input matInput placeholder="Digite o nome da conta" />
        </mat-form-field>
      </div>

      <div class="section">
        <h3>Visão geral</h3>
        <div class="card-list">
          <mat-card class="card success" appearance="outlined">
            <mat-card-header>
              <mat-card-title>Receitas</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="value">R$ 2.500</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="card error" appearance="outlined">
            <mat-card-header>
              <mat-card-title>Despesas</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="value">R$ 2.500</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="card info" appearance="outlined">
            <mat-card-header>
              <mat-card-title>Saldo</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="value">R$ 2.500</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
  `,
  styles: `
    .card-list {
      display: flex;
      gap: 8px;
    }
    .card {
      flex: 1;
    }
    mat-card-header {
      font-size: clamp(1.5rem, 2.2vw, 2rem);
    }
    mat-card-content {
      padding-top: 10px;
      font-size: clamp(1.2rem, 2vw, 1.8rem);
    }
    .success {
      background-color: green;
      color: white;
    }
    .error {
      background-color: red;
      color: white;
    }
    .warning {
      background-color: orange;
      color: white;
    }
    .info {
      background-color: blue;
      color: white;
    }
  `,
})
export class Transactions { }
