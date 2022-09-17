import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesMakingPurchasesComponent } from './rules_making_purchases.component';

describe('RulesMakingPurchasesComponent', () => {
  let component: RulesMakingPurchasesComponent;
  let fixture: ComponentFixture<RulesMakingPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesMakingPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesMakingPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
