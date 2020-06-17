import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
@Directive({
    selector: '[appDropddown]'
})


export class DropownDirective{
  @HostBinding ('class.open') isOpen = false;
// @HostListener('click') toggleOpen(){
//     this.isOpen = !this.isOpen;
// }
@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
   
}