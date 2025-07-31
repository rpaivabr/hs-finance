import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transactions',
  imports: [MatFormFieldModule, MatCardModule, MatInputModule],
  template: `
    <div class="container">
      <div class="w-full">
        <p>transactions works!</p>
        <!-- Campo de busca -->
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Procurar conta</mat-label>
          <input matInput placeholder="Digite o nome da conta" class="w-full"/>
        </mat-form-field>
      </div>
      <h6 class="mini-cards-title">Visão geral</h6>
      <div class="card-container">
        <!-- Card principal -->
        <!-- Card 1 -->
        <!-- <mat-card class="mini-card" appearance="outlined">
          <mat-card-title>Receita</mat-card-title>
          <mat-card-content>
            <p>R$ 2.500</p>
          </mat-card-content>
        </mat-card> -->

        <!-- Card 2 -->
        <!-- <mat-card class="mini-card" appearance="outlined">
          <mat-card-title>Despesas</mat-card-title>
          <mat-card-content>
            <p>R$ 1.200</p>
          </mat-card-content>
        </mat-card> -->

        <!-- Card 3 -->
        <!-- <mat-card class="mini-card" appearance="outlined">
          <mat-card-title>Saldo</mat-card-title>
          <mat-card-content>
            <p>R$ 1.300</p>
          </mat-card-content>
        </mat-card> -->
      </div>
    </div>
  `,
  styles: `

    .container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 10px;
    }

    .w-full {
      width: 100%
    }
    // .form-wrapper {
    //   height: 100vh;
    //   width: 100%
    //   margin: 0;
    //   margin: 16px
    //   align-items: center;
    //   justify-content: center;
    // }

    // .card-container {
    //   padding: 0 16px;
    //   display: flex;
    //   gap: 8px;
    //   margin: 16px;
    //   box-sizing: border-box;
    // }

    // .mini-card-title {
    //   margin: 16px;
    // }

    // .mini-cards {
    // }

    // mat-form-field {
    //   width: 100%;
    // }
    // mat-card-title {
    //   margin: 8px;
    // }
  `,
})
export class Transactions {}
