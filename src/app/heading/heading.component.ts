import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
collapsed = true
@Output() featureSelected = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
onSelect(feature:string){
  this.featureSelected.emit(feature)
}
}
