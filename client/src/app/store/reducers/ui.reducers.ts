import { Action, createReducer, on } from '@ngrx/store';
import { UiState } from '@store/models/uiState';
import { closeOverlay, openOverlay } from '@store/actions/ui.action';

export const initialState = {
  overlay: {
    isOpen: false,
    title: '',
    component: null,
  },
};

const _uiReducer = createReducer(
  initialState,
  on(openOverlay, (state, { title, component }) => ({
    ...state,
    overlay: {
      isOpen: true,
      title,
      component,
    },
  })),
  on(closeOverlay, state => ({
    ...state,
    overlay: {
      isOpen: false,
      title: '',
      component: null,
    },
  }))
);

export function uiReducer(state: UiState | any, action: Action): UiState {
  return _uiReducer(state, action);
}

export const uiFeatureKey = 'ui';
