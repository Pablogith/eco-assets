import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBillingComponent } from './settings-billing.component';

describe('SettingsBillingComponent', () => {
  let component: SettingsBillingComponent;
  let fixture: ComponentFixture<SettingsBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
