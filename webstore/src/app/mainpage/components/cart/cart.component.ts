import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IAppState } from 'src/app/redux/app.state';
import { selectUser } from 'src/app/redux/selectors/user.selector';
import { IItem } from 'src/app/shared/models/iitem.model';
import { IUserModel } from 'src/app/shared/models/user.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public user!: IUserModel;
  public items: IItem[] = [];
  public favIds: string[] = [];
  // public qty: number = 1;
  public counter: any = {};

  public totalCost = 0;

  constructor(
    private userService: AuthService,
    private catService: CategoriesService,
    private cartServ: CartService,
    private store: Store<IAppState> // public subsciption: Subscription
  ) {
    setTimeout(() => {
      this.store
        .select<IUserModel[]>(selectUser)
        .subscribe((val: IUserModel[]) => {
          val.map((el) => {
            this.favIds = el.cart;
          });
        });
      this.catService.getUsersItems(this.favIds).subscribe((val: any) => {
        this.items = val;
        val.forEach((el: { id: string | number }) => {
          this.counter[el.id] = 1;
          this.getTotalCost();
        });
      });
    }, 1000);
  }

  ngOnInit(): void {}

  public addToFav(id: string) {
    this.cartServ.addToFavorite(id)?.subscribe();
    this.cartServ.updateUser();
  }

  public removeFromFav(id: string) {
    this.cartServ.removeFromFavorite(id).subscribe();
    this.cartServ.updateUser();
  }

  public inc(id: string) {
    if (this.counter[id] >= 5) return;
    this.counter[id] += 1;
    this.getTotalCost();
  }

  public dcrs(id: string) {
    if (this.counter[id] > 1) {
      this.counter[id] -= 1;
    }
    this.getTotalCost();
  }

  public getTotalCost() {
    this.totalCost = 0;
    const prices = this.items.map((val) => val.price);
    const quantity: any = Object.values(this.counter);

    for (let i = 0; i < prices.length; i++) {
      this.totalCost += +prices[i] * +quantity[i];
    }
  }

  public removeFromCart(id: string) {
    this.cartServ.removeFromCart(id).subscribe();
    this.cartServ.updateUser();
  }
}
