import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorMessageComponent } from './auditor-message.component';

describe('AuditorMessageComponent', () => {
  let component: AuditorMessageComponent;
  let fixture: ComponentFixture<AuditorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
