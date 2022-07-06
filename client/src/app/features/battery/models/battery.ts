export enum BatteryStatusName {
  ACTIVE = 'active',
  DISABLED = 'disabled',
  BREAKING = 'breaking',
  HOLD = 'hold',
  REPAIRING = 'repairing',
}

export interface Battery {
  id: number;
  createdAt: string | Date;
  name: string;
  description: string;
  type: string;
  level: number;
  voltage: number;
  capacity: number;
  weight: number;
  generatingPower: number;
  status: BatteryStatusName;
}
