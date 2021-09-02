import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderCenterComponent } from './components/header/header-center/header-center.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchMainComponent } from './components/header/header-center/search-main/search-main.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    HeaderTopComponent,
    HeaderCenterComponent,
    HeaderComponent,
    SearchMainComponent,
    SearchMainComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
