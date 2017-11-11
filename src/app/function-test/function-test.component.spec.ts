import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionTestComponent } from './function-test.component';

describe('FunctionTestComponent', () => {
  let component: FunctionTestComponent;
  let fixture: ComponentFixture<FunctionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
