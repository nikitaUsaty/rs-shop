import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ItemComponent } from 'src/app/mainpage/components/item/item.component';
import { CategoriesService } from '../../shared/services/categories.service';

@Directive({
  selector: '[appRating]',
})
export class RatingDirective {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private item: ItemComponent
  ) {}

  ngOnChanges(): void {
    const rate = this.item.rating;
    if (rate < 3)
      this.renderer.setStyle(this.elRef.nativeElement, 'borderColor', 'red');
  }
}
