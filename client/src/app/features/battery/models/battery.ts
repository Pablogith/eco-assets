export interface Battery {
  id: number;
  name: string;
  description: string;
  type: string;
  level: number;
  location: {
    city: string;
    country: string;
  };
  voltage: number;
  capacity: number;
  weight: number;
  generating_power: number;
  status: 'active' | 'disabled' | 'breaking' | 'hold' | 'repairing';
  created_at: string;
}
