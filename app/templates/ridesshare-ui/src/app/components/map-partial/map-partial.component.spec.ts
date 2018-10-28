import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPartialComponent } from './map-partial.component';

describe('MapPartialComponent', () => {
  let component: MapPartialComponent;
  let fixture: ComponentFixture<MapPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
