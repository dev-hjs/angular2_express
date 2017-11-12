import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHisComponent } from './user-his.component';

describe('UserHisComponent', () => {
  let component: UserHisComponent;
  let fixture: ComponentFixture<UserHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
