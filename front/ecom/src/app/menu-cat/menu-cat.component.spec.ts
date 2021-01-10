import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatComponent } from './menu-cat.component';

describe('MenuCatComponent', () => {
  let component: MenuCatComponent;
  let fixture: ComponentFixture<MenuCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
