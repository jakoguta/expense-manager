import { Component, signal, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ExpenseTable } from '../shared/components/expense-table/expense-table';
import { ExpenseTableSm } from '../shared/components/expense-table-sm/expense-table-sm';
import { ExpenseCard } from '../shared/components/expense-card/expense-card';
import { Expense } from '../shared/models/expense.model';
import { ExpenseService } from '../shared/services/expense.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [BaseChartDirective, ExpenseTable, ExpenseCard, RouterLink, ExpenseTableSm],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  constructor(private expenseService: ExpenseService) {}

  incomeTitle = signal('Monthly Income');
  incomeAmount = signal(250000);
  incomeIcon = signal('bi bi-bank2');

  budgetTitle = signal('Monthly Budget');
  budgetAmount = signal(150000);
  budgetIcon = signal('bi bi-wallet-fill');

  expensesTitle = signal('Current Expenses');
  expensesAmount = signal(120000);
  expensesIcon = signal('bi bi-piggy-bank-fill');

  expenses = signal<Expense[]>([]);   

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  public expenseBarChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Expenses',
        backgroundColor: '#0d6efd',
      },
    ],
  };

  public incomeBarChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Income',
        backgroundColor: '#0d6efd',
      },
    ],
  };

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses.set(data.slice(0, 5));
    });
  }

}
