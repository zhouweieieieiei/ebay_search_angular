import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarproductstabComponent } from './similarproductstab.component';

describe('SimilarproductstabComponent', () => {
  let component: SimilarproductstabComponent;
  let fixture: ComponentFixture<SimilarproductstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarproductstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarproductstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
