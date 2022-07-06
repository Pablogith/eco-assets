import { BaseEntity } from '../../../core/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Battery } from '../../batteries/entities/battery.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @OneToMany(() => Battery, (battery: Battery) => battery.user)
  batteries: Battery[];
}
