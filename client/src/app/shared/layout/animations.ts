import { animate, state, style, transition, trigger } from "@angular/animations";

export const triggerDropdownMenu = trigger('dropdownMenu', [
  state(
    'open',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
      transform: 'translateY(.25rem)',
      display: 'none',
    })
  ),
  transition('open => close', [animate('150ms ease-in')]),
  transition('close => open', [
    style({
      display: 'block',
    }),
    animate('300ms 200ms ease-out'),
  ]),
]);

export const menuOverlay = trigger('menuOverlay', [
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
    }
    )
  ),
  transition('open => close', [animate('150ms ease-in')]),
  transition('close => open', [
    style({
      display: 'block',
    }),
    animate('300ms 200ms ease-out'),
  ]),
]);

export const menu = trigger('menu', [
  state(
    'open',
    style({
      transform: 'translateX(0)',
    })
  ),
  state(
    'close',
    style({
      transform: 'translateX(-100%)',
      display: 'none',
    })
  ),
  transition('open => close', [animate('150ms ease-in')]),
  transition('close => open', [
    style({
      display: 'block',
    }),
    animate('300ms 200ms ease-out'),
  ]),
]);
