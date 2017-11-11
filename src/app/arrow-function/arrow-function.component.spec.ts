import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowFunctionComponent } from './arrow-function.component';

describe('ArrowFunctionComponent', () => {
  let component: ArrowFunctionComponent;
  let fixture: ComponentFixture<ArrowFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
