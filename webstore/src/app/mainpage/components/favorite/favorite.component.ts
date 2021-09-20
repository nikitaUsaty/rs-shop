import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IItem } from 'src/app/shared/models/iitem.model';
import { IUserModel } from 'src/app/shared/models/user.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';

import { CartService } from 'src/app/shared/services/cart.service';
import { select, Store } from '@ngrx/store';
import { IAppState, IUserState } from 'src/app/redux/app.state';
import { selectUser } from 'src/app/redux/selectors/user.selector';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  public user!: IUserModel;
  public items: IItem[] = [];
  public favIds: string[] = [];

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
            this.favIds = el.favorites;
            console.log(this.favIds);
          });
        });
      this.catService.getUsersItems(this.favIds).subscribe((val: any) => {
        this.items = val;
        this.cartServ.updateUser();
      });
    }, 100);
  }

  ngOnInit(): void {}

  public addTocart(id: string) {
    this.cartServ.addToCart(id)?.subscribe();
    this.cartServ.updateUser();
  }

  public removeFromCart(id: string) {
    this.cartServ.removeFromCart(id).subscribe();
    this.cartServ.updateUser();
  }
  public addToFav(id: string) {
    this.cartServ.addToFavorite(id)?.subscribe();
    this.cartServ.updateUser();
  }

  public removeFromFav(id: string) {
    this.cartServ.removeFromFavorite(id).subscribe();
    this.cartServ.updateUser();
  }
}
