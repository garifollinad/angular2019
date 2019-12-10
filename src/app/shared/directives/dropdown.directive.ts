import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleDropdown() {
    const buttonEl = this.elRef.nativeElement;
    const isOpen = buttonEl.classList.contains('open');
    if (isOpen) {
      this.renderer.removeClass(buttonEl, 'open');
    } else {
      this.renderer.addClass(buttonEl, 'open');
    }
  }

}
