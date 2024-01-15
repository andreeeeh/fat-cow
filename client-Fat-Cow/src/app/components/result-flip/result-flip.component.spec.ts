import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFlipComponent } from './result-flip.component';

describe('ResultFlipComponent', () => {
  let component: ResultFlipComponent;
  let fixture: ComponentFixture<ResultFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultFlipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
