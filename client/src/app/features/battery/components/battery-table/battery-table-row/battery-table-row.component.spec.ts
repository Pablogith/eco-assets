import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryTableRowComponent } from './battery-table-row.component';

describe('BatteryTableRowComponent', () => {
  let component: BatteryTableRowComponent;
  let fixture: ComponentFixture<BatteryTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryTableRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
