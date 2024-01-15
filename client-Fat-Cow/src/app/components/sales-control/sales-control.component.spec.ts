import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesControlComponent } from './sales-control.component';

describe('SalesControlComponent', () => {
  let component: SalesControlComponent;
  let fixture: ComponentFixture<SalesControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
