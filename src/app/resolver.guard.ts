import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {

  userObj={
    userID:10,
    username:'BHushan'
  };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.userObj;
  }

  
}
