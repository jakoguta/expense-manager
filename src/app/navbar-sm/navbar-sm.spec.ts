import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSm } from './navbar-sm';

describe('NavbarSm', () => {
  let component: NavbarSm;
  let fixture: ComponentFixture<NavbarSm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
