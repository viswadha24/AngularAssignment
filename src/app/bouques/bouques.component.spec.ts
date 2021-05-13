import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquesComponent } from './bouques.component';

describe('BouquesComponent', () => {
  let component: BouquesComponent;
  let fixture: ComponentFixture<BouquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
