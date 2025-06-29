import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-table-sm',
  imports: [CommonModule],
  templateUrl: './expense-table-sm.html',
  styleUrl: './expense-table-sm.css'
})
export class ExpenseTableSm {
  expenses = input<Expense[]>([]);
}
