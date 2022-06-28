import { createAction, props } from '@ngrx/store';

export const openOverlay = createAction(
  '[UI] Open Overlay',
  props<{ title: string; component: any }>()
);
export const closeOverlay = createAction('[UI] Close Overlay');
