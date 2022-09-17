import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPolicyComponent } from './personal_policy.component';

describe('PersonalPolicyComponent', () => {
  let component: PersonalPolicyComponent;
  let fixture: ComponentFixture<PersonalPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
