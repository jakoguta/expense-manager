import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() {}

  getExpenses(): Observable<Expense[]> {
    // Simulate HTTP call
    return of([
        { id: '1', date: '2025-06-01', description: 'Groceries at Naivas', amount: 2500, status: 'Paid' },
        { id: '2', date: '2025-06-02', description: 'Fuel for car', amount: 6800, status: 'Pending' },
        { id: '3', date: '2025-06-03', description: 'Electricity bill', amount: 4300, status: 'Paid' },
        { id: '4', date: '2025-06-04', description: 'Internet subscription', amount: 3000, status: 'Pending' },
        { id: '5', date: '2025-06-05', description: 'Lunch at Java', amount: 1500, status: 'Paid' },
        { id: '6', date: '2025-06-06', description: 'Water bill', amount: 2200, status: 'Paid' },
        { id: '7', date: '2025-06-07', description: 'Phone airtime', amount: 500, status: 'Paid' },
        { id: '8', date: '2025-06-08', description: 'Gym membership', amount: 4000, status: 'Pending' },
        { id: '9', date: '2025-06-09', description: 'Netflix subscription', amount: 1200, status: 'Paid' },
        { id: '10', date: '2025-06-10', description: 'House cleaning', amount: 3500, status: 'Pending' },
        { id: '11', date: '2025-06-11', description: 'Doctor appointment', amount: 6000, status: 'Paid' },
        { id: '12', date: '2025-06-12', description: 'Data bundles', amount: 1000, status: 'Paid' },
        { id: '13', date: '2025-06-13', description: 'Taxi ride', amount: 850, status: 'Pending' },
        { id: '14', date: '2025-06-14', description: 'Stationery', amount: 1300, status: 'Paid' },
        { id: '15', date: '2025-06-15', description: 'Dining out', amount: 2700, status: 'Pending' },
      ]);
  }
}