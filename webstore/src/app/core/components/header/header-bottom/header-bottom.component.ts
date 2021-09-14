import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoriesModel } from 'src/app/shared/models/categories.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
})
export class HeaderBottomComponent implements OnInit {
  constructor(
    private catService: CategoriesService,
    private activatedRouter: ActivatedRoute
  ) {}

  public categories!: ICategoriesModel[];

  ngOnInit(): void {
    this.catService.getCategories().subscribe((val: any) => {
      this.categories = val;
    });
  }
}
