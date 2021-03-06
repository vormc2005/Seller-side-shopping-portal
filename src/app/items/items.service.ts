import { Item } from './item.model';
import { EventEmitter } from '@angular/core';

export class ItemsService{
    itemSelected = new EventEmitter<Item>()


   private items: Item[]=[
        new Item('Boxing Gloves', 'Size - 10oz', 'https://www.everlast.com/pub/media/catalog/product/cache/a5ba26f2a5254268d66d11d35227afd8/v/i/vinyl-autograph-glove_5.jpg', 50, 25),
        new Item("Punching bag", 'Heavy bag', 'https://cdn.webshopapp.com/shops/281654/files/289057557/500x500x2/boxing-bag-filled-with-chain.jpg', 100, 55)
      ];

      getItems(){
          return this.items.slice();
      }
}