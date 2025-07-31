import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-reports',
  imports: [MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  template: `
    <p>report works!</p>
    <mat-form-field>
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="picker" />
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle
        matIconSuffix
        [for]="picker"
      ></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styles: ``,
})
export class Reports {}
