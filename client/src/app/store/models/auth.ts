export interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    id: number;
    password: string;
  } | null;
  errorMessage: any;
}
