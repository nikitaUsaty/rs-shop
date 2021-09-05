import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { IGeoAPI } from 'src/app/core/models/geo-api.interface';

import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent implements OnInit {
  constructor(private service: LocationService) {}

  public city!: IGeoAPI;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  panelOpenState = false;
  ngOnInit(): void {
    this.service.getLocation().subscribe((val: any) => {
      this.city = val.city;
    });
  }
}
