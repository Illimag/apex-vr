import {trigger, state, animate, style, transition } from '@angular/animations';

export function visibilityAnimations() {
  return infoAnimations();
}

function infoAnimations() {
  return trigger('animateVisible', [
    state('show', style({
      opacity: 1
    })),
    state('hide',   style({
      opacity: 0
    })),
    transition('show => hide', animate('300ms ease-in-out')),
    transition('hide => show', animate('300ms ease-in-out'))
  ]);
}
