import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/app.state';
import { selectUser } from 'src/app/redux/selectors/user.selector';
import { IUserModel } from 'src/app/shared/models/user.interface';

@Directive({
  selector: '[appRemoveFav]',
})
export class RemoveFavDirective {
  public cart!: string[];
  @Input() item!: string;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private store: Store<IAppState>
  ) {
    elRef.nativeElement.style.display = 'none';
  }

  ngOnInit() {
    this.store
      .select<IUserModel[]>(selectUser)
      .subscribe((val: IUserModel[]) => {
        if (!val) return;
        this.cart = val[0].favorites;
        this.isAdded(this.item);
      });
  }
  private isAdded(id: string) {
    let isInCart = this.cart.includes(id);
    if (!isInCart)
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
    if (isInCart)
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
  }
}
