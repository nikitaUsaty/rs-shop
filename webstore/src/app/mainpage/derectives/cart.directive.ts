import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, IUserState } from 'src/app/redux/app.state';
import { selectUser } from 'src/app/redux/selectors/user.selector';
import { ICart } from '../../shared/models/iitem.model';
import { IUserModel } from '../../shared/models/user.interface';

@Directive({
  selector: '[appCart]',
})
export class CartDirective implements OnInit {
  public cart!: string[];
  @Input() item!: string;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private store: Store<IAppState>
  ) {
    elRef.nativeElement.style.display = 'block';
  }

  ngOnInit() {
    this.store
      .select<IUserModel[]>(selectUser)
      .subscribe((val: IUserModel[]) => {
        if (val === undefined) return;
        this.cart = val[0].cart;
        this.isAdded(this.item);
      });
  }
  private isAdded(id: string) {
    if (!this.cart) return;
    let isInCart = this.cart.includes(id);
    if (isInCart)
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
    if (!isInCart)
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
  }
}
