import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';

const routes: Routes = [
  {
    path:'loans',
    component:LoansComponent
  },
 
  {
    path:'add-loan',
    component:LoantypesComponent,
    outlet:'outlet1 '
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
