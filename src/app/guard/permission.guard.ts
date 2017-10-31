import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class PermissionGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const hasPermission: boolean = Math.random() < 0.95;
    if (!hasPermission) {
      console.log('用户无权访问此股票详情');
      alert('用户无权访问此股票详情');
    }
    return hasPermission;
  }

}
