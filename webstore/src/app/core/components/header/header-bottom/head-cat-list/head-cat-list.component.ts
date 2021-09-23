import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoriesModel } from 'src/app/shared/models/categories.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-head-cat-list',
  templateUrl: './head-cat-list.component.html',
  styleUrls: ['./head-cat-list.component.scss'],
})
export class HeadCatListComponent implements OnInit {
  @Input()
  category!: ICategoriesModel;
  constructor() {}
  ngOnInit(): void {}
}
