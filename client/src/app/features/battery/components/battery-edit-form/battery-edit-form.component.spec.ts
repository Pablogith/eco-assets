import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryEditFormComponent } from './battery-edit-form.component';

describe('BatteryEditFormComponent', () => {
  let component: BatteryEditFormComponent;
  let fixture: ComponentFixture<BatteryEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
