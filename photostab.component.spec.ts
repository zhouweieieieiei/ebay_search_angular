import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotostabComponent } from './photostab.component';

describe('PhotostabComponent', () => {
  let component: PhotostabComponent;
  let fixture: ComponentFixture<PhotostabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotostabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotostabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
