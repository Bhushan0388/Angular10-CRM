import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(component: SearchComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty){
      return window.confirm("Are you sure to leave? ")
    }
    return true;
  }
  
}
