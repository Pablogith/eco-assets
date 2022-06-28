import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryTableComponent } from './battery-table.component';

describe('BatteryTableComponent', () => {
  let component: BatteryTableComponent;
  let fixture: ComponentFixture<BatteryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
