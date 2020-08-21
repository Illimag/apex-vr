import {trigger, state, animate, style, transition, keyframes} from '@angular/core';

export function flyinHigh() {
  return flyHigh();
}

function flyHigh() {
  return trigger('flyInOut', [
    transition('void => *', [
      animate(600, keyframes([
        style({opacity: 0, transform: 'scale(0.0)', offset: 0}),
        style({opacity: 0, transform: 'scale(0.0)', offset: 0.1}),
        style({opacity: 1, transform: 'scale(1.0)', offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(600, keyframes([
        style({opacity: 1, transform: 'scale(1.0)', offset: 0}),
        style({opacity: 0, transform: 'scale(0.0)', offset: 0.9}),
        style({opacity: 0, transform: 'scale(0.0)', offset: 1.0})
      ]))
    ])
  ]);
}
