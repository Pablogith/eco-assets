import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BatteryStatusName } from '@features/battery/models';
import { dropdownMenu } from '@features/battery/animations';

interface CreateBatteryForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  type: FormControl<string | null>;
  level: FormControl<number | null>;
  voltage: FormControl<number | null>;
  capacity: FormControl<number | null>;
  weight: FormControl<number | null>;
  generatingPower: FormControl<number | null>;
  status: FormControl<BatteryStatusName | null>;
}

@Component({
  selector: 'eac-battery-create-form',
  templateUrl: './battery-create-form.component.html',
  styleUrls: ['./battery-create-form.component.scss'],
  animations: [dropdownMenu],
})
export class BatteryCreateFormComponent implements OnInit {
  public status: string[] = [
    'active',
    'disabled',
    'breaking',
    'hold',
    'repairing',
  ];

  public statusDropdownIsOpen = false;
  public currentSelectedStatus: string = BatteryStatusName.ACTIVE;
  public form!: FormGroup<CreateBatteryForm>;
  private fb = inject(FormBuilder);

  public ngOnInit(): void {
    this.form = this.fb.group<CreateBatteryForm>({
      name: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      type: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      level: this.fb.control(0.0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      voltage: this.fb.control(0.0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      capacity: this.fb.control(0.0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      weight: this.fb.control(0, [Validators.required, Validators.min(0)]),
      generatingPower: this.fb.control(0.0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      status: this.fb.control(BatteryStatusName.DISABLED, [
        Validators.required,
      ]),
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }

  public setStatus(status: string): void {
    this.form.get('status')?.setValue(status as BatteryStatusName);
    this.currentSelectedStatus = status;
    this.statusDropdownIsOpen = false;
  }

  public toggleStatusDropdown(): void {
    this.statusDropdownIsOpen = !this.statusDropdownIsOpen;
  }
}
