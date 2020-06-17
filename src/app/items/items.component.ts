import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers:[ItemsService]
})
export class ItemsComponent implements OnInit {
selectedItem: Item;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.itemSelected
    .subscribe(
      (items:Item)=>{
        this.selectedItem=items;
      }
      )
  }

}
