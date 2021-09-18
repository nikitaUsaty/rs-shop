import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IItem } from '../shared/models/iitem.model';
import { CategoriesService } from '../shared/services/categories.service';
import SwiperCore, { Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent implements OnInit {
  private id!: string;
  private subscription!: Subscription;
  public item!: IItem;
  public thumbsSwiper: any;
  public img!: string[];
  constructor(
    private activateRoute: ActivatedRoute,
    private service: CategoriesService
  ) {
    this.subscription = activateRoute.params.subscribe((params) => {
      this.id = params.itemId;
      this.item;
      this.service.getItem(this.id).subscribe((val) => {
        this.item = val;
        this.img = val.imageUrls;
      });
    });
  }

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
