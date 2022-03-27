import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ExpensesListComponent } from './components/expenses/expenses-list/expenses-list.component';
import { ExpenseOverviewComponent } from './components/expenses/expense-overview/expense-overview.component';
import { ExpenseDetailsComponent } from './components/expenses/expense-details/expense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    HomeComponent,
    ExpensesListComponent,
    ExpenseOverviewComponent,
    ExpenseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
