import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderCenterComponent } from './components/header/header-center/header-center.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchMainComponent } from './components/header/header-center/search-main/search-main.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';
import { HeadCatListComponent } from './components/header/header-bottom/head-cat-list/head-cat-list.component';
import {
  loginMenuComponent,
  LoginComponent,
} from './components/header/header-center/login/login.component';
import { CartComponent } from './components/header/header-center/cart/cart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FavoriteComponent } from './components/header/header-center/cart/favorite/favorite.component';
import { ViewedComponent } from './components/header/header-center/viewed/viewed.component';
import { CompareListComponent } from './components/header/header-center/compare-list/compare-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/services/auth.service';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderTopComponent,
    HeaderCenterComponent,
    HeaderComponent,
    SearchMainComponent,
    SearchMainComponent,
    FooterComponent,
    HeaderBottomComponent,
    HeadCatListComponent,
    LoginComponent,
    CartComponent,
    FavoriteComponent,
    ViewedComponent,
    CompareListComponent,
    loginMenuComponent,
    CatalogueComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [AuthService],
})
export class CoreModule {}
