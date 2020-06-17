import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';
import { ItemsService } from '../../items.service';


@Component({
  selector: 'app-items-item',
  templateUrl: './items-item.component.html',
  styleUrls: ['./items-item.component.css']
})
export class ItemsItemComponent implements OnInit {



@Input() items: Item;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
  }
onSelected(){
//call method in items service
this.itemService.itemSelected.emit(this.items)
}

}
