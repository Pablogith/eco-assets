import { User } from '@core/models';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: any;
}
