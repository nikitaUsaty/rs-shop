import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './mainpage/components/categories/categories.component';
import { ItemComponent } from './mainpage/components/item/item.component';
import { MainpageComponent } from './mainpage/pages/mainpage/mainpage.component';
import { SubCategoriesComponent } from './mainpage/components/sub-categories/sub-categories.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'home', component: MainpageComponent },
  {
    path: ':id',
    component: CategoriesComponent,
  },
  { path: ':id/:subId', component: SubCategoriesComponent },
  { path: ':id/:subId/:itemId', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
