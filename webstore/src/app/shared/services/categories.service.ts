import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoriesModel } from '../models/categories.interface';
import { IUserModel } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http.get<ICategoriesModel[]>(
      'http://localhost:3004/categories'
    );
  }
}
