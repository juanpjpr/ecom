import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorCatComponent } from './visor-cat.component';

describe('VisorCatComponent', () => {
  let component: VisorCatComponent;
  let fixture: ComponentFixture<VisorCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
