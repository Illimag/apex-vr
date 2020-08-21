import {trigger, state, animate, style, transition } from '@angular/animations';

export function overlayAnimations() {
  return overlayAnimate();
}

function overlayAnimate() {
  return trigger('animateOverlay', [
    state('closed', style({
      opacity: 1
    })),
    state('opened',   style({
      opacity: 0
    })),
    transition('closed => opened', animate('300ms ease-in')),
    transition('opened => closed', animate('300ms ease-out'))
  ]);
}
