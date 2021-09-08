import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IUserModel } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  public userName: string = '';

  userSub!: Subscription;

  constructor(public dialog: MatDialog, private authServ: AuthService) {}

  openDialog() {
    const dialogRef = this.dialog.open(loginMenu, {
      restoreFocus: false,
    });
  }

  public logOut(): void {
    this.userName = '';
    this.authServ.removeToken();
  }

  ngOnInit(): void {
    this.authServ.getUser();
    this.userSub = this.authServ.user.subscribe((val: any) => {
      this.userName = val?.firstName;
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'login-menu.html',
  styleUrls: ['./login.component.scss'],
})
export class loginMenu {}
