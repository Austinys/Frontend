import { TransactionsService } from '../../services/transactions.service';
import { map, Observable } from 'rxjs';
import { Transaction } from '../../interfaces/transaction';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css'],
})
export class TransactionsPageComponent implements OnInit {
  transactionId$!: Observable<string | null>;
  transactions$!: Observable<Transaction[]>;

  constructor(private transactionsService: TransactionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.transactionId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));

    this.transactions$ = this.transactionsService.getTransactions();
  }
}