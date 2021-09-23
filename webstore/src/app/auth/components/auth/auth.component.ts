import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUserModel } from 'src/app/shared/models/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authServ: AuthService, public dialog: MatDialog) {}
  public token!: { token: string };
  public user!: IUserModel;
  public userName!: string;
  ngOnInit(): void {}

  public submitForm(value: { login: string; password: string }) {
    this.authServ
      .getToken(value.login, value.password)
      .subscribe((val: any) => {
        this.token = val;
        this.authServ.setTokenToLS(this.token.token);
        this.authServ.getUser();
      });

    this.authServ.isUserLogged();
  }

  public closeDialog(): void {
    this.dialog.closeAll();
  }

  ngOnDestroy(): void {
    this.authServ.getUser()?.unsubscribe();
  }
}
