import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  private disable: boolean;

  @Input() set disabled(value: boolean) {
    this.disable = value;
  }

  // @HostBinding('style.width') width = '100%';
  // @HostBinding('style.height') height = '100%';
  @HostBinding('style.border') border = '1px solid white';
  @HostBinding('style.font-size') fontSize = '30px';
  @HostBinding('style.background') background = '0';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.padding') padding = '12px 50px 12px 50px';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    if (this.disable) {
      return;
    }
    this.background = 'white';
  }

  @HostListener('mouseout')
  onMouseOut() {
    if (this.disable) {
      return;
    }
    this.background = '0';
  }

}
