import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingtabComponent } from './shippingtab.component';

describe('ShippingtabComponent', () => {
  let component: ShippingtabComponent;
  let fixture: ComponentFixture<ShippingtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
