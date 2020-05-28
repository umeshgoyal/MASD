import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMasdComponent } from './about-masd.component';

describe('AboutMasdComponent', () => {
  let component: AboutMasdComponent;
  let fixture: ComponentFixture<AboutMasdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMasdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMasdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
