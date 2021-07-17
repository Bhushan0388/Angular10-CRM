import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'product/:id/photo/:photoId',component:ProductComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'',
    redirectTo:'loans',
    pathMatch:'full'
  },
  {
    path:'loans',
    component:LoansComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
