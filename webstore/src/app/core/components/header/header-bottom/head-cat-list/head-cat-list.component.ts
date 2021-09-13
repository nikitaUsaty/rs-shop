import { Component, Input, OnInit } from '@angular/core';
import { ICategoriesModel } from 'src/app/shared/models/categories.interface';

@Component({
  selector: 'app-head-cat-list',
  templateUrl: './head-cat-list.component.html',
  styleUrls: ['./head-cat-list.component.scss'],
})
export class HeadCatListComponent {
  @Input()
  category!: ICategoriesModel;
  constructor() {}
}
