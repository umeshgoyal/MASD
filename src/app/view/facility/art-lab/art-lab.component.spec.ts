import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtLabComponent } from './art-lab.component';

describe('ArtLabComponent', () => {
  let component: ArtLabComponent;
  let fixture: ComponentFixture<ArtLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
