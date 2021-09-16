import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { IItem } from '../shared/models/iitem.model';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {
  private id!: string;
  private subId!: string;
  private subscription!: Subscription;
  public items!: IItem[];
  public startPage = 0;
  public paginationLimit = 10;
  public sortValue = 0;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CategoriesService
  ) {
    this.subscription = activateRoute.params.subscribe((params) => {
      this.id = params.id;
      this.subId = params.subId;
      this.service.test(this.id, this.subId).subscribe((val) => {
        this.items = val;
        console.log(this.items);
      });
    });
  }
  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 10;
  }

  ngOnInit(): void {}

  public sortPrice(): void {
    this.sortValue = this.sortValue === -1 ? 1 : -1;
    console.log(this.sortValue);
  }

  public sortRate(): void {
    this.sortValue = this.sortValue === -2 ? 2 : -2;
    console.log(this.sortValue);
  }
}
