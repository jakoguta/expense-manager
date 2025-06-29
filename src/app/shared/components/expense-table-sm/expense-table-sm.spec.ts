import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTableSm } from './expense-table-sm';

describe('ExpenseTableSm', () => {
  let component: ExpenseTableSm;
  let fixture: ComponentFixture<ExpenseTableSm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTableSm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTableSm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
