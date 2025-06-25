import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Expense } from '../../models/expense.model'

@Component({
  selector: 'app-expense-table',
  imports: [CommonModule],
  templateUrl: './expense-table.html',
  styleUrl: './expense-table.css'
})
export class ExpenseTable {
  expenses = input<Expense[]>([]);
}
