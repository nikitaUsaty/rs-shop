import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ICategoriesModel,
  ISubCategories,
} from '../shared/models/categories.interface';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public cat!: ICategoriesModel;
  public subcat!: ISubCategories[];
  private id!: string;
  private subscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CategoriesService
  ) {
    this.subscription = activateRoute.params.subscribe((params) => {
      this.id = params['id'];

      this.service.getSubCatList(this.id).subscribe((val) => {
        this.cat = val;
        this.subcat = val.subCategories;
      });
    });
  }

  ngOnInit(): void {}
}
