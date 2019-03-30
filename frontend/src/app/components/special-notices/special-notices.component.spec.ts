import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNoticesComponent } from './special-notices.component';

describe('SpecialNoticesComponent', () => {
  let component: SpecialNoticesComponent;
  let fixture: ComponentFixture<SpecialNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
