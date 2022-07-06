import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryCreateFormComponent } from './battery-create-form.component';

describe('BatteryCreateFormComponent', () => {
  let component: BatteryCreateFormComponent;
  let fixture: ComponentFixture<BatteryCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
