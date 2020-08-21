import {trigger, state, animate, style, transition } from '@angular/animations';

export function visibilityLogoAnimations() {
  return infoAnimations();
}

function infoAnimations() {
  return trigger('animateLogoVisible', [
    state('blueshow', style({
      opacity: 1,
      transform: 'scale(1.5)',
      margin: '30px 15px',
      padding: '0 10px 0 20px'
    })),
    state('bluehide',   style({
      opacity: 0,
      transform: 'scale(1.0)',
      margin: '30px 0',
      padding: '0 0 0 20px'
    })),
    state('whiteshow', style({
      opacity: 1,
      transform: 'scale(1.0)',
      margin: '30px 0',
      padding: '0 0 0 20px'
    })),
    state('whitehide',   style({
      opacity: 0,
      transform: 'scale(1.5)',
      margin: '30px 15px',
      padding: '0 10px 0 20px'
    })),
    transition('blueshow => bluehide', animate('300ms ease-in-out')),
    transition('bluehide => blueshow', animate('300ms ease-in-out')),
    transition('whiteshow => whitehide', animate('300ms ease-in-out')),
    transition('whitehide => whiteshow', animate('300ms ease-in-out'))
  ]);
}
