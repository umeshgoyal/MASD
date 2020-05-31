import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbseMendateComponent } from './cbse-mendate.component';

describe('CbseMendateComponent', () => {
  let component: CbseMendateComponent;
  let fixture: ComponentFixture<CbseMendateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbseMendateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbseMendateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
