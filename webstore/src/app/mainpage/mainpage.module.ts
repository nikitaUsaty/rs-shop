import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SortPipe } from '../pipes/sort.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemComponent } from './components/item/item.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { CartDirective } from './derectives/cart.directive';
import { RemoveCartDirective } from './derectives/remove-cart.directive';
import { RemoveFavDirective } from './derectives/remove-fav.directive';
import { AddFavDirective } from './derectives/add-fav.directive';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { NgRatingBarModule } from 'ng-rating-bar';
import { FavpageDirective } from './derectives/favpage.directive';
import { AmountDirective } from './derectives/amount.directive';
import { CartComponent } from './components/cart/cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartpageDirective } from './derectives/cartpage.directive';

@NgModule({
  declarations: [
    MainpageComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    SortPipe,
    ItemComponent,
    CartDirective,
    RemoveCartDirective,
    RemoveFavDirective,
    AddFavDirective,
    FavoriteComponent,
    FavpageDirective,
    AmountDirective,
    CartComponent,
    CartpageDirective,
  ],
  imports: [
    CommonModule,
    MatCarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
    NgRatingBarModule,
    CarouselModule,
  ],
  exports: [MainpageComponent],
})
export class MainpageModule {}
