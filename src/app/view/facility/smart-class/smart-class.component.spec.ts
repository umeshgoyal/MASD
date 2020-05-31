import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClassComponent } from './smart-class.component';

describe('SmartClassComponent', () => {
  let component: SmartClassComponent;
  let fixture: ComponentFixture<SmartClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
