import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowervaseComponent } from './flowervase.component';

describe('FlowervaseComponent', () => {
  let component: FlowervaseComponent;
  let fixture: ComponentFixture<FlowervaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowervaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowervaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
