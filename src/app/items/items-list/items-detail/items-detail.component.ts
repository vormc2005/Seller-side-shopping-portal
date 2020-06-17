import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {
@Input() items: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
