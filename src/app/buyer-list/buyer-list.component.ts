import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  public buyerId = '';

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.buyerId = this.routeInfo.snapshot.params['id'];
  }

}
