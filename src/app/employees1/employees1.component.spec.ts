import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employees1Component } from './employees1.component';

describe('Employees1Component', () => {
  let component: Employees1Component;
  let fixture: ComponentFixture<Employees1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Employees1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Employees1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
