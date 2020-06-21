import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideDeliveryComponent } from './outside-delivery.component';

describe('OutsideDeliveryComponent', () => {
  let component: OutsideDeliveryComponent;
  let fixture: ComponentFixture<OutsideDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
