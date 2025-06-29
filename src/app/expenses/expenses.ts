import { Component, signal, OnInit } from '@angular/core';
import { ExpenseTable } from '../shared/components/expense-table/expense-table';
import { ExpenseTableSm } from '../shared/components/expense-table-sm/expense-table-sm';
import { ExpenseService } from '../shared/services/expense.service';
import { Expense } from '../shared/models/expense.model';

@Component({
  selector: 'app-expenses',
  imports: [ExpenseTable, ExpenseTableSm],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css'
})
export class Expenses implements OnInit {

  constructor(private expenseService: ExpenseService) {}

  expenses = signal<Expense[]>([]);

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses.set(data);
    });
  }
}
