import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public stock;
  public stockId = 0;
  public stockName = '';
  public isPro2 = false;
  public focus = false;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // this.stockId = this.routeInfo.snapshot.queryParams['id'];
    // this.stockName = this.routeInfo.snapshot.queryParams['name'];
    // 参数订阅的方式来获取参数
    this.routeInfo.params.subscribe((params: Params) => this.stockId = params['id']);
    this.routeInfo.data.subscribe((data: { stocks123: Stocks }) => {
      this.stock = data.stocks123;
    });
    // this.stockId = this.routeInfo.snapshot.params['id'];
    this.isPro2 = this.routeInfo.snapshot.data[0]['isPro1'];
  }

  public isFocus() {
    return this.focus;
  }
}

export class Stocks {
  constructor(public id: number, public name: string) {
  }
}
