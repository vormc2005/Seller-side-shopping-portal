import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Item } from '../../item.model';


@Component({
  selector: 'app-items-item',
  templateUrl: './items-item.component.html',
  styleUrls: ['./items-item.component.css']
})
export class ItemsItemComponent implements OnInit {
@Output() selectedItem = new EventEmitter<void>()


@Input() items: Item;

  constructor() { }

  ngOnInit() {
  }
onSelected(){
this.selectedItem.emit();
console.log(this.selectedItem)
}

}
