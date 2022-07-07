import { BaseEntity } from '../../../core/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BatteryStatus } from './battery-status.entity';
import { User } from '../../users/entities/user.entity';

@Entity('battery')
export class Battery extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  type: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  level: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  voltage: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  capacity: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  weight: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  generatingPower: number;

  @ManyToOne(
    () => BatteryStatus,
    (batteryStatus: BatteryStatus) => batteryStatus.status,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      nullable: true,
    },
  )
  status: BatteryStatus;

  @ManyToOne(() => User, (user: User) => user.batteries)
  user: User;

  constructor() {
    super();
  }
}
