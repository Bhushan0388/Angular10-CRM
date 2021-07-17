import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoansComponent,
    LoantypesComponent,
    ProductComponent,
    ClientsComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide:LocationStrategy, useClass:PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
