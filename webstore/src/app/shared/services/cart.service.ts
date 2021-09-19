import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public isInCart!: Observable<boolean>;
  private isInCart$ = new BehaviorSubject(false);
  constructor(private http: HttpClient, private userService: AuthService) {}

  public addToCart(itemId: string) {
    const token = localStorage.getItem('token');
    const body = {
      id: itemId,
    };
    if (!token) return;
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post('http://localhost:3004/users/cart', body, httpOption);
  }

  public removeFromCart(itemId: string) {
    const token = localStorage.getItem('token');
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.delete(
      `http://localhost:3004/users/cart?id=${itemId}`,
      httpOption
    );
  }

  public updateUser(): void {
    this.userService.getUser();
  }

  public addToFavorite(itemId: string) {
    const token = localStorage.getItem('token');
    const body = {
      id: itemId,
    };
    if (!token) return;
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(
      'http://localhost:3004/users/favorites',
      body,
      httpOption
    );
  }

  public removeFromFavorite(itemId: string) {
    const token = localStorage.getItem('token');
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.delete(
      `http://localhost:3004/users/favorites?id=${itemId}`,
      httpOption
    );
  }
}
