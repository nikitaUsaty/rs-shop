import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUserModel } from 'src/app/shared/models/user.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/redux/app.state';
import { addUser } from 'src/app/redux/actions/user.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged!: Observable<boolean>;
  private isLogged$ = new BehaviorSubject(false);
  user: EventEmitter<IUserModel | null> = new EventEmitter();

  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  public getToken(login: string, password: string) {
    return this.http.post('http://localhost:3004/users/login', {
      login: login,
      password: password,
    });
  }

  public setTokenToLS(token: string) {
    localStorage.setItem('token', token);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }

  public isUserLogged() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged$.next(true);
    } else {
      this.isLogged$.next(false);
    }
    console.log(this.isLogged$);
  }

  public getUser() {
    const token = localStorage.getItem('token');
    if (!token) return;
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    this.http
      .get<IUserModel>('http://localhost:3004/users/userInfo', httpOption)
      .subscribe((val: any) => {
        this.user.emit(val);
      });
    return this.http
      .get<IUserModel>('http://localhost:3004/users/userInfo', httpOption)
      .subscribe((user) => {
        this.store.dispatch(addUser({ user }));
      });
  }
}
