import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcMessageComponent } from './vc-message.component';

describe('VcMessageComponent', () => {
  let component: VcMessageComponent;
  let fixture: ComponentFixture<VcMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
