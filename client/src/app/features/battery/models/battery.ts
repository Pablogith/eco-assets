import { User } from '@core/models';

export enum BatteryStatusName {
  ACTIVE = 'active',
  DISABLED = 'disabled',
  BREAKING = 'breaking',
  HOLD = 'hold',
  REPAIRING = 'repairing',
}

export interface Battery {
  id?: number;
  createdAt?: string | Date;
  name: string;
  description: string;
  type: string;
  level: number;
  voltage: number;
  capacity: number;
  weight: number;
  generatingPower: number;
  status?: {
    status: BatteryStatusName;
    createdAt: string | Date;
    isDeleted: boolean;
    id: string;
  };
  statusId?: string;
  userId?: string | null;
  user?: User;
}
