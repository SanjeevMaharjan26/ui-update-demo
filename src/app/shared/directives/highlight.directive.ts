import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[nxHighlight]', standalone: false })
export class HighlightDirective implements OnChanges {
  @Input('nxHighlight') color = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor = this.color || '';
  }
}
