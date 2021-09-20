import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import {
  ICategoriesModel,
  ISubCategories,
} from '../models/categories.interface';
import { IItem } from '../models/iitem.model';
import { IUserModel } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  public getCategories() {
    return this.http.get<ICategoriesModel[]>(
      'http://localhost:3004/categories'
    );
  }

  public getSubCatList(id: string): Observable<ICategoriesModel> {
    return this.http.get<ICategoriesModel>(
      `http://localhost:3004/categories/${id}`
    );
  }

  public getItems(id: string, subID: string): Observable<IItem[]> {
    return this.http.get<IItem[]>(
      `http://localhost:3004/goods/category/${id}/${subID}`
    );
  }

  public getItem(id: string): Observable<IItem> {
    return this.http.get<IItem>(`http://localhost:3004/goods/item/${id}`);
  }

  public getUsersItems(ids: string[]): Observable<IItem> {
    const itemsArr: unknown[] = [];
    ids.map((id) => {
      itemsArr.push(
        this.http.get<IItem>(`http://localhost:3004/goods/item/${id}`)
      );
    });
    return forkJoin(itemsArr);
  }
}
