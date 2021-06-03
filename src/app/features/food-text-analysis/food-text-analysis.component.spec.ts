import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTextAnalysisComponent } from './food-text-analysis.component';

describe('FoodTextAnalysisComponent', () => {
  let component: FoodTextAnalysisComponent;
  let fixture: ComponentFixture<FoodTextAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTextAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTextAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
