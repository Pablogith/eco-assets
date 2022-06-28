import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const backgroundOverlaySlideOver = trigger(
  'backgroundOverlaySlideOver',
  [
    state('open', style({ opacity: 1 })),
    state('closed', style({ opacity: 0, display: 'none' })),
    transition('open => closed', [
      animate('300ms ease-in-out'),
      style({ opacity: 1 }),
      animate('500ms ease-in-out'),
    ]),
    transition('closed => open', [
      style({ opacity: 0 }),
      animate('500ms ease-in-out'),
    ]),
  ]
);

export const slideOverPanel = trigger('slideOverPanel', [
  state('open', style({ transform: 'translateX(0)' })),
  state('closed', style({ transform: 'translateX(100%)', display: 'none' })),
  transition('open => closed', [
    animate('300ms ease-in-out'),
    style({ transform: 'translateX(0)' }),
    animate('500ms ease-in-out'),
  ]),
  transition('closed => open', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-in-out'),
  ]),
]);
