import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdevKayitComponent } from './odev-kayit.component';

describe('OdevKayitComponent', () => {
  let component: OdevKayitComponent;
  let fixture: ComponentFixture<OdevKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdevKayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdevKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
