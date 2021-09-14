import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  ICategoriesModel,
  ISubCategories,
} from '../models/categories.interface';
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

  public test(id: string) {
    let catID = this.route.snapshot.paramMap.get('id');
    console.log(catID);

    if (!catID) return;
    return this.getSubCatList(id);
  }
}
