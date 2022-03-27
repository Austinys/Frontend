import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  getTransactions (): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${environment.apiUrl}/transactions`);
  }
}
