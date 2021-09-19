import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { IItem } from 'src/app/shared/models/iitem.model';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.scss'],
})
export class SearchMainComponent implements OnInit {
  public searchStr: string = '';

  public searchCard!: IItem[];
  public searchValueUpdate = new Subject<string>();
  public isShown: boolean = false;

  constructor(private service: SearchService, private router: Router) {
    this.searchValueUpdate
      .pipe(
        debounceTime(700),
        map((value) => (value.length > 2 ? value : '')),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        this.service.getSearchResult(val).subscribe((val) => {
          this.searchCard = Object.values(val);
          if (this.searchStr == '') {
            this.isShown = false;
          } else {
            this.isShown = true;
          }
        });
      });
  }

  ngOnInit(): void {}

  public navToItem(id: string) {
    this.router.navigate([`computers-peripherals/peripherals/${id}`]);
  }
}
