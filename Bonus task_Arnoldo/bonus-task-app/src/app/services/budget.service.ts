import { Injectable } from '@angular/core';
import { Expense } from '../types';
import {EXPENSES} from "../mock-expenses";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  expenses: Expense[];
  
  constructor() {
    this.expenses = EXPENSES;
   }

  getExpenses () {
    return this.expenses;
  }

  getExpense(id: string): Expense | undefined {
     return this.expenses.find(item => item.id === id);
    }
}







