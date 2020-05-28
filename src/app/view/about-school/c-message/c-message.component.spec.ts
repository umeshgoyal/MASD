import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMessageComponent } from './c-message.component';

describe('CMessageComponent', () => {
  let component: CMessageComponent;
  let fixture: ComponentFixture<CMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
