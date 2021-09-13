import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss'],
})
export class HeaderCenterComponent implements OnInit {
  isShowDiv = true;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  constructor() {}

  ngOnInit(): void {}
}
