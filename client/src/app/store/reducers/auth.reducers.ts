import { Action, createReducer, on } from '@ngrx/store';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
} from '../actions/auth.action';
import { AuthState } from '../models/auth';

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

const _authReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    isAuthenticated: false,
    user: null,
    errorMessage: null,
  })),
  on(loginSuccess, (state, { user }) => {
    return {
      ...state,
      isAuthenticated: true,
      user,
      errorMessage: null,
    };
  }),
  on(loginFailure, (state, { errorMessage }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    errorMessage,
  })),
  on(logout, state => ({
    ...state,
    isAuthenticated: false,
    user: null,
    errorMessage: null,
  }))
);

export function authReducer(state: AuthState | any, action: Action): AuthState {
  return _authReducer(state, action);
}

export const authFeatureKey = 'auth';
