import { OnInit, ViewEncapsulation } from '@angular/core';

import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  constructor() {}
  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;
  interval: any = 0;
  pause: boolean = false;
  slider!: KeenSlider;

  currentSlide: number = 1;
  dotHelper: Array<Number> = [];

  resetInterval() {
    clearInterval(this.interval);
  }
  setInterval() {
    this.resetInterval();
    this.interval = setInterval(() => {
      if (!this.pause) {
        this.slider.next();
      }
    }, 2000);
  }

  setPause(active: boolean) {
    this.pause = active;
    this.setInterval();
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      duration: 1000,
      dragStart: () => {
        this.setPause(true);
      },
      dragEnd: () => {
        this.setPause(false);
      },
    });
    this.setInterval();
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.details().relativeSlide;
        },
      });
      this.dotHelper = [...Array(this.slider.details().size).keys()];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
