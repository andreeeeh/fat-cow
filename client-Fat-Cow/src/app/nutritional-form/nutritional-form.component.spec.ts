import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalFormComponent } from './nutritional-form.component';

describe('NutritionalFormComponent', () => {
  let component: NutritionalFormComponent;
  let fixture: ComponentFixture<NutritionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
