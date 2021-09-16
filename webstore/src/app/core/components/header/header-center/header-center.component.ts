import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss'],
})
export class HeaderCenterComponent implements OnInit {
  isShowDiv = true;

  public toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateToMain(): void {
    this.router.navigate(['/home']);
  }
}
