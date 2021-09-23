import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  public catID = 'appliances';
  public subCatID!: string;

  constructor(
    private service: CategoriesService,
    private catalogueComp: HeaderCenterComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((val) => {
      this.categories = val;
      this.subCat = this.categories[0].subCategories;
    });
  }

  public getSubCat(category: ICategoriesModel): void {
    this.subCat = category.subCategories;
    this.catID = category.id;
  }

  public closeDropDown(): void {
    this.catalogueComp.toggleDisplayDiv();
  }

  public navToItems(sub: any): void {
    const id = this.catID;
    this.router.navigate([`${id}/${sub}`]);
  }
}
