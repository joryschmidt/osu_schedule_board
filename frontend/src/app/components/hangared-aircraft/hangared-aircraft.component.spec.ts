import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangaredAircraftComponent } from './hangared-aircraft.component';

describe('HangaredAircraftComponent', () => {
  let component: HangaredAircraftComponent;
  let fixture: ComponentFixture<HangaredAircraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangaredAircraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangaredAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
