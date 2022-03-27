import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';
import { Expense } from 'src/app/types';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})

export class ExpenseDetailsComponent implements OnInit {
  expense: Expense | undefined;
  id: string | null = '';

  constructor(private route: ActivatedRoute, private budgetService: BudgetService) {
  }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.expense = this.budgetService.getExpense(this.id);
    }
}
}
