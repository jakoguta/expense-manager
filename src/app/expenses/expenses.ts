import { Component } from '@angular/core';
import { ExpenseTable } from '../shared/components/expense-table/expense-table'

@Component({
  selector: 'app-expenses',
  imports: [ExpenseTable],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css'
})
export class Expenses {

}
