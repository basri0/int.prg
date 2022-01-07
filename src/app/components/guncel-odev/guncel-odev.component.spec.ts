import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuncelOdevComponent } from './guncel-odev.component';

describe('GuncelOdevComponent', () => {
  let component: GuncelOdevComponent;
  let fixture: ComponentFixture<GuncelOdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuncelOdevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuncelOdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
