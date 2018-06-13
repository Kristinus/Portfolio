import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLink]'
})
export class LinkDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cover();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.remove();
  }

  private cover() {
    this.renderer.addClass(this.element.nativeElement, 'cover');
  }

  private remove() {
    this.renderer.removeClass(this.element.nativeElement, 'cover');
  }
}
