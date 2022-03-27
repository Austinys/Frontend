import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/types';

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.css']
})

export class ExpenseOverviewComponent implements OnInit {
  @Input() expense!: Expense;
  @Output() onClick: EventEmitter <MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(private router: Router) {
  }
 
  ngOnInit(): void {
  }

  handleClick(event: MouseEvent, expense: Expense) {
    this.router.navigate(['/expenses/', expense.id]);
    this.onClick.emit(event);
  }
}
