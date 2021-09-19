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
import { RatingDirective } from './derectives/rating.directive';
import { RemoveCartDirective } from './derectives/remove-cart.directive';
import { RemoveFavDirective } from './derectives/remove-fav.directive';
import { AddFavDirective } from './derectives/add-fav.directive';

@NgModule({
  declarations: [
    MainpageComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    SortPipe,
    ItemComponent,
    CartDirective,
    RatingDirective,
    RemoveCartDirective,
    RemoveFavDirective,
    AddFavDirective,
  ],
  imports: [
    CommonModule,
    MatCarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
  ],
  exports: [MainpageComponent],
})
export class MainpageModule {}
