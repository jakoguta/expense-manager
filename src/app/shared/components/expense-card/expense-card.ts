import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-expense-card',
  imports: [CommonModule],
  templateUrl: './expense-card.html',
  styleUrl: './expense-card.css'
})
export class ExpenseCard {
  title = input<string>('');
  value = input<number>(0);
  iconClass = input<string>('');
}
