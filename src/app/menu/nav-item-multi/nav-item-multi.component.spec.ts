import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemMultiComponent } from './nav-item-multi.component';

describe('NavItemMultiComponent', () => {
  let component: NavItemMultiComponent;
  let fixture: ComponentFixture<NavItemMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
