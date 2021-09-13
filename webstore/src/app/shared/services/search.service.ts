import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from '../models/iitem.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public getSearchResult(searchQuery: string) {
    return this.http.get<IItem>(
      `http://localhost:3004/goods/search?text=${searchQuery}`
    );
  }
}
