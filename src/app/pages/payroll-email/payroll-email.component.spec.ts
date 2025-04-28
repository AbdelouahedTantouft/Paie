import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmailComponent } from './payroll-email.component';

describe('PayrollEmailComponent', () => {
  let component: PayrollEmailComponent;
  let fixture: ComponentFixture<PayrollEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
