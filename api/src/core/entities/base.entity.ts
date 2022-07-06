import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('base')
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    default: false,
  })
  isDeleted: boolean;
}
