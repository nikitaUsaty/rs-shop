import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderCenterComponent } from './components/header/header-center/header-center.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchMainComponent } from './components/header/header-center/search-main/search-main.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';
import { HeadCatListComponent } from './components/header/header-bottom/head-cat-list/head-cat-list.component';
import { LoginComponent } from './components/header/header-center/login/login.component';
import { CartComponent } from './components/header/header-center/cart/cart.component';
import { MatExpansionModule } from '@angular/material/expansion';
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
  ],
  imports: [CommonModule, MatExpansionModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
