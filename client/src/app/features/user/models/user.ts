import { User as DefaultUser } from '@core/models/user';
import { Battery } from '@features/battery/models';

export interface User extends DefaultUser {
  batteries: Battery[];
}
