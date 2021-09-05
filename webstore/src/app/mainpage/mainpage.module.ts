import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [MainpageComponent],
  imports: [CommonModule, MatCarouselModule.forRoot()],
  exports: [MainpageComponent],
})
export class MainpageModule {}
