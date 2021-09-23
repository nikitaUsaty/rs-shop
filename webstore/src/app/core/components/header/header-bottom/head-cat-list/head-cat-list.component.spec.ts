import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCatListComponent } from './head-cat-list.component';

describe('HeadCatListComponent', () => {
  let component: HeadCatListComponent;
  let fixture: ComponentFixture<HeadCatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadCatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
