import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopComponent } from './show-shop.component';

describe('ShowShopComponent', () => {
  let component: ShowShopComponent;
  let fixture: ComponentFixture<ShowShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
