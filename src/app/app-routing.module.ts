import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StockComponent} from './stock/stock.component';
import {Code404Component} from './code404/code404.component';
import {SellerListComponent} from './seller-list/seller-list.component';
import {BuyerListComponent} from './buyer-list/buyer-list.component';
import {ConsultComponent} from './consult/consult.component';
import {PermissionGuard} from './guard/permission.guard';
import {FocusGuard} from './guard/focus.guard';
import {StockResolve} from './guard/stock.resolve';

// Routes: 路由配置的集合,path:浏览器的模版的路径,component:模版对应的组件
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // 辅助路由
  {path: 'consult', component: ConsultComponent, outlet: 'aux'},
  {path: 'stock/:id', component: StockComponent, data: [{isPro1: true}], children: [
    // 子组件
    {path: '', component: SellerListComponent},
    {path: 'buyer/:id', component: BuyerListComponent},
    {path: 'seller/:id', component: SellerListComponent},
    // 路由守卫
  ], canActivate: [PermissionGuard], canDeactivate: [FocusGuard], resolve: {stocks123: StockResolve}},
  {path: 'buyer/:id', component: BuyerListComponent},
  // 路径通配符(必须放置在最后面)
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
