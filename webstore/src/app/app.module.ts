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
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './shared/services/categories.service';

@NgModule({
  declarations: [AppComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainpageModule,
    AuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
