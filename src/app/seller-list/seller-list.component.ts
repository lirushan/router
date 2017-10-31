import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  public sellerId = '';

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 参数订阅
    this.routeInfo.params.subscribe((params: Params) => this.sellerId = params['id']);
    // 参数快照
    // this.sellerId = this.routeInfo.snapshot.params['id'];
  }

}
