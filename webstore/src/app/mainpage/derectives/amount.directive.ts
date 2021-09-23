import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAmount]',
})
export class AmountDirective {
  @Input() public item!: number;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'grid');
  }

  ngOnInit(): void {
    if (this.item >= 20) {
      this.renderer.addClass(this.elRef.nativeElement, 'green');
    } else if (this.item > 5 && this.item <= 19) {
      this.renderer.addClass(this.elRef.nativeElement, 'yellow');
    } else this.renderer.addClass(this.elRef.nativeElement, 'red');
  }
}
