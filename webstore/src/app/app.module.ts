import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainpageModule } from './mainpage/mainpage.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './mainpage/components/categories/categories.component';
import { SubCategoriesComponent } from './mainpage/components/sub-categories/sub-categories.component';
import { SortPipe } from './pipes/sort.pipe';
import { ItemComponent } from './mainpage/components/item/item.component';
import { SwiperModule } from 'swiper/angular';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './redux/reducers/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainpageModule,
    AuthModule,
    FormsModule,
    SwiperModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
