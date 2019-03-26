import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarRequestsComponent } from './hangar-requests.component';

describe('HangarRequestsComponent', () => {
  let component: HangarRequestsComponent;
  let fixture: ComponentFixture<HangarRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
