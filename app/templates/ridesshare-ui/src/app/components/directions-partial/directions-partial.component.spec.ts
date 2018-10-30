import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsPartialComponent } from './directions-partial.component';

describe('DirectionsPartialComponent', () => {
  let component: DirectionsPartialComponent;
  let fixture: ComponentFixture<DirectionsPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
