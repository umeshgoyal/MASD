import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealChartComponent } from './meal-chart.component';

describe('MealChartComponent', () => {
  let component: MealChartComponent;
  let fixture: ComponentFixture<MealChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
