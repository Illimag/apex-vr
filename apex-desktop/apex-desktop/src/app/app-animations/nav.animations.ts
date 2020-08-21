import {trigger, state, animate, style, transition } from '@angular/animations';

export function navAnimations() {
  return navAnimate();
}

function navAnimate() {
  return trigger('animateNav', [
    state('loading', style({
      opacity: 1
    })),
    state('loaded',   style({
      opacity: 0
    })),
    transition('loading => loaded', animate('300ms ease-in')),
    transition('loaded => loading', animate('300ms ease-out'))
  ]);
}
