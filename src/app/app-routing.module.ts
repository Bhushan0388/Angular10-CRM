import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { ClientsComponent } from './clients/clients.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferenceCheckGuard } from './preference-check.guard';
import { ProductComponent } from './product/product.component';
import { ResolverGuard } from './resolver.guard';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';
import {AddCustomerComponent} from './customers/add-customer/add-customer.component'
import { LoantypesComponent } from './loantypes/loantypes.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { DeleteContactComponent } from './contacts/delete-contact/delete-contact.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'loantype',
    component: LoantypesComponent
  },
  {
    path: 'product/:id/photo/:photoId', component: ProductComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '',
    redirectTo: 'loans',
    pathMatch: 'full'
  },
  {
    // resolve data is loaded before route is activated
    path: 'loans',
    component: LoansComponent,
    resolve: {
      data: ResolverGuard
    }
  },
  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsavedGuard]
  },


  {
    path: 'admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          { path: 'manage', component: AdminManageComponent },
          { path: 'edit', component: AdminEditComponent },
          { path: 'delete', component: AdminDeleteComponent }
        ]
      }

    ]
  },
  {
    path: 'preferences',
    canLoad: [PreferenceCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: 'customers/add-customer', component: AddCustomerComponent
  },
  {
    path: 'customers/edit-customer', component: EditCustomerComponent
  },
  {
    path: 'customers/delete-customer', component: DeleteContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
