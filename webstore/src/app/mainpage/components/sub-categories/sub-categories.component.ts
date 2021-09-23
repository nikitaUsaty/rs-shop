import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IItem } from '../../../shared/models/iitem.model';
import { IUserModel } from '../../../shared/models/user.interface';
import { CartService } from '../../../shared/services/cart.service';
import { CategoriesService } from '../../../shared/services/categories.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {
  private id!: string;
  private subId!: string;
  private subscription!: Subscription;
  public items!: IItem[];
  public startPage = 0;
  public paginationLimit = 10;
  public sortValue = 0;
  @Input() item: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CategoriesService,
    private cartServ: CartService,
    private store: Store
  ) {
    this.subscription = activateRoute.params.subscribe((params) => {
      this.id = params.id;
      this.subId = params.subId;
      this.service.getItems(this.id, this.subId).subscribe((val) => {
        this.items = val;
      });
    });
  }
  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 10;
  }

  ngOnInit(): void {}

  public sortPrice(): void {
    this.sortValue = this.sortValue === -1 ? 1 : -1;
  }

  public sortRate(): void {
    this.sortValue = this.sortValue === -2 ? 2 : -2;
  }

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
