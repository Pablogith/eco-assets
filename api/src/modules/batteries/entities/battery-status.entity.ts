import { BaseEntity } from '../../../core/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Battery } from './battery.entity';

export enum Status {
  ACTIVE = 'active',
  DISABLED = 'disabled',
  BREAKING = 'breaking',
  HOLD = 'hold',
  REPAIRING = 'repairing',
}

@Entity('battery_status')
export class BatteryStatus extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.ACTIVE })
  status: Status;

  @OneToMany(() => Battery, (battery: Battery) => battery.status)
  batteries: Battery[];
}
