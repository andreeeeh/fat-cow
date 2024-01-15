import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSaleFormComponent } from './new-sale-form.component';

describe('NutritionalFormComponent', () => {
  let component: NewSaleFormComponent;
  let fixture: ComponentFixture<NewSaleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSaleFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewSaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
