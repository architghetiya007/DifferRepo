import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferCustomerInformationComponent } from './differ-customer-information.component';

describe('DifferCustomerInformationComponent', () => {
  let component: DifferCustomerInformationComponent;
  let fixture: ComponentFixture<DifferCustomerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferCustomerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferCustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
