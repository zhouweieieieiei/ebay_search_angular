import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellertabComponent } from './sellertab.component';

describe('SellertabComponent', () => {
  let component: SellertabComponent;
  let fixture: ComponentFixture<SellertabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellertabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
