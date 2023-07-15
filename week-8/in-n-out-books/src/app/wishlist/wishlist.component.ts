/**
 * Title: wishlist.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 27 Jun 2023
 * Description:  In-N-Out-BookSp4 App
*/
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() {
    
  }
  
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
  
  ngOnInit(): void {
  }

}
