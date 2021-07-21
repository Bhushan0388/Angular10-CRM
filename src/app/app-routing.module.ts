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
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';

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
    component:ClientsComponent,
    canActivate:[AdminGuard]
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
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },
   
  
  { path:'admin',
    canActivate:[SuperAdminGuard],
          children:[
                  {
                    path:'',
                    component:AdminComponent
                  },
                  {
                    path:'',
                    canActivateChild:[AdminAccessGuard],
                    children:[
                        {path:'manage', component:AdminManageComponent},
                        {path:'edit',component:AdminEditComponent},
                        {path:'delete', component:AdminDeleteComponent}
                    ]
                  }

          ]
  },
  { path: 'preferences',
    canLoad:[PreferenceCheckGuard],
   loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) },
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
