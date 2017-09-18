import {Directive, HostListener, HostBinding, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @HostBinding('style.background')
  public color: string;

  @Input()
  public appMarker: string;

  constructor(element: ElementRef, renderer: Renderer2) {
    this.color = '';
  }

  @HostListener('mouseover')
  mark() {
    this.color = this.appMarker;
  }

  @HostListener('mouseout')
  unmark() {
    this.color = '';
  }

}
