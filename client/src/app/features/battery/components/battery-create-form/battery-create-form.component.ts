import { Component, inject, NgIterable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Battery, BatteryStatusName } from '@features/battery/models';
import { dropdownMenu } from '@features/battery/animations';
import { BatteryService } from '@features/battery/services';
import { NotificationsService } from '@core/services';
import { select, Store } from '@ngrx/store';
import { authFeatureKey } from '@store/reducers/auth.reducers';
import { map, Observable, switchMap } from 'rxjs';
import { closeOverlay } from '@store/actions/ui.action';

type Status$ = Observable<Battery['status'][]> & NgIterable<string>;

interface CreateBatteryForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  type: FormControl<string | null>;
  level: FormControl<number | null>;
  voltage: FormControl<number | null>;
  capacity: FormControl<number | null>;
  weight: FormControl<number | null>;
  generatingPower: FormControl<number | null>;
  statusId: FormControl<any>;
}

@Component({
  selector: 'eac-battery-create-form',
  templateUrl: './battery-create-form.component.html',
  styleUrls: ['./battery-create-form.component.scss'],
  animations: [dropdownMenu],
})
export class BatteryCreateFormComponent implements OnInit {
  public status$!: Status$;

  public statusDropdownIsOpen = false;
  public currentSelectedStatus: string = BatteryStatusName.ACTIVE;
  public form!: FormGroup<CreateBatteryForm>;

  private fb = inject(FormBuilder);
  private batteryService = inject(BatteryService);
  private notificationService = inject(NotificationsService);
  private store = inject(Store);

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
      statusId: this.fb.control(BatteryStatusName.DISABLED, [
        Validators.required,
      ]),
    });
    this.status$ = this.batteryService.getAllStatus() as Status$;
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.store
      .pipe(
        select(authFeatureKey),
        map(auth => auth.user.id),
        switchMap(userId => {
          const battery: Battery = {
            ...this.form.value,
            statusId: this.form.get('statusId')?.value,
            userId,
          } as Battery;
          return this.batteryService.create(battery);
        })
      )
      .subscribe({
        next: (createdBattery: Battery) => {
          this.store.dispatch(closeOverlay());
          this.notificationService.show({
            type: 'success',
            message: `Battery ${createdBattery.name} created`,
          });
        },
        error: err => {
          if (err.status === 500)
            this.notificationService.show({
              type: 'error',
              message: 'Something went wrong',
            });
        },
      });
  }

  public setStatus(
    status: string | undefined,
    statusId: string | undefined
  ): void {
    this.form.get('statusId')?.setValue(statusId);
    this.currentSelectedStatus = status as string;
    this.statusDropdownIsOpen = false;
  }

  public toggleStatusDropdown(): void {
    this.statusDropdownIsOpen = !this.statusDropdownIsOpen;
  }
}
