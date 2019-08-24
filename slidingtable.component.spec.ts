import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingtableComponent } from './slidingtable.component';

describe('SlidingtableComponent', () => {
  let component: SlidingtableComponent;
  let fixture: ComponentFixture<SlidingtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
