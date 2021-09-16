import { Component, Input, OnInit } from '@angular/core';

import {
  ICategoriesModel,
  ISubCategories,
} from 'src/app/shared/models/categories.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { HeaderCenterComponent } from '../header-center.component';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  public categories!: ICategoriesModel[];

  public subCat!: ISubCategories[];

  constructor(
    private service: CategoriesService,
    private catalogueComp: HeaderCenterComponent
  ) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((val) => {
      this.categories = val;
      this.subCat = this.categories[0].subCategories;
    });
  }

  public getSubCat(category: ICategoriesModel): void {
    console.log(category);

    this.subCat = category.subCategories;
  }

  public closeDropDown(): void {
    this.catalogueComp.toggleDisplayDiv();
  }
}
