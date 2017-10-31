import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Stocks} from '../stock/stock.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

// Resolve<T> 泛型: 需要加载数据的类
// @Injectable() 注解: 让当前的类支持依赖注入, 需要注入的对象写在构造函数里, 例如实例化Router对象
@Injectable()
export class StockResolve implements Resolve<Stocks> {

  // ActivatedRouteSnapshot: 参数快照对象
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stocks | Observable<Stocks> | Promise<Stocks> {
    const id = route.params['id'];
    console.log(id);
    if (id == 1) {
      console.log('实例化Stocks对象');
      return new Stocks(1, 'IBM');
    }
    console.log('实例化Stocks对象失败');
    // this.router.navigate(['/home']);
    return null;
  }

  constructor(private router: Router) {
  }
}
