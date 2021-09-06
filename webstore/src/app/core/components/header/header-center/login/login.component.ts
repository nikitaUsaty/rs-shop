import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    // #docregion focus-restoration
    const dialogRef = this.dialog.open(loginMenu, {
      restoreFocus: false,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    // #enddocregion focus-restoration
  }
  ngOnInit(): void {}
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'login-menu.html',
  styleUrls: ['./login.component.scss'],
})
export class loginMenu {}
