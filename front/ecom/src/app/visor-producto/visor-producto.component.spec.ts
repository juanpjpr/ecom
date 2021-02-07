import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorProductoComponent } from './visor-producto.component';

describe('VisorProductoComponent', () => {
  let component: VisorProductoComponent;
  let fixture: ComponentFixture<VisorProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
