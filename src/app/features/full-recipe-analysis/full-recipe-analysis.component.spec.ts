import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullRecipeAnalysisComponent } from './full-recipe-analysis.component';

describe('FullRecipeAnalysisComponent', () => {
  let component: FullRecipeAnalysisComponent;
  let fixture: ComponentFixture<FullRecipeAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullRecipeAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullRecipeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
