import { Component, inject, Input, OnInit } from '@angular/core';
import { dropdownMenu } from '@features/battery/animations';
import { Battery } from '@features/battery/models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BatteryService } from '@features/battery/services';

interface BatteryEditForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  type: FormControl<string | null>;
  level: FormControl<number | null>;
  voltage: FormControl<number | null>;
  capacity: FormControl<number | null>;
  weight: FormControl<number | null>;
  statusId: FormControl<string | undefined | null>;
}

@Component({
  selector: 'eac-battery-edit-form',
  templateUrl: './battery-edit-form.component.html',
  styleUrls: ['./battery-edit-form.component.scss'],
  animations: [dropdownMenu],
})
export class BatteryEditFormComponent implements OnInit {
  @Input() battery!: Battery;
  public statusDropdownIsOpen = false;
  public form!: FormGroup<BatteryEditForm>;
  private fb = inject(FormBuilder);
  private batteryService = inject(BatteryService);

  public ngOnInit(): void {
    this.form = this.fb.group<BatteryEditForm>({
      name: this.fb.control(this.battery.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: this.fb.control(this.battery.description, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      type: this.fb.control(this.battery.type, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      level: this.fb.control(this.battery.level, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      voltage: this.fb.control(this.battery.voltage, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      capacity: this.fb.control(this.battery.capacity, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      weight: this.fb.control(this.battery.weight, [
        Validators.required,
        Validators.min(0),
      ]),
      statusId: this.fb.control(this.battery.statusId, [Validators.required]),
    });
  }

  public toggleStatusDropdown(): void {
    this.statusDropdownIsOpen = !this.statusDropdownIsOpen;
  }
}
