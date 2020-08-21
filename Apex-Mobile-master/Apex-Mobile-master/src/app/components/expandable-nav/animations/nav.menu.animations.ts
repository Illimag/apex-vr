import {trigger, state, animate, style, transition, keyframes} from '@angular/animations';

export function navAnimations() {
  return navAnimate();
}

function navAnimate() {
  return trigger('navToggle', [
    state('opened', style({
      opacity: 1,
      transform: 'scale(1.0)'
    })),
    state('closed', style({
      opacity: 0,
      transform: 'scale(0.0)'
    })),
    transition('closed => opened', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'scale(0.0)', offset: 0}),
        style({opacity: 0, transform: 'scale(1.0)', offset: 0.1}),
        style({opacity: 1, transform: 'scale(1.0)', offset: 1.0})
      ]))
    ]),
    transition('opened => closed', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'scale(1.0)', offset: 0}),
        style({opacity: 0, transform: 'scale(1.0)', offset: 0.9}),
        style({opacity: 0, transform: 'scale(0.0)', offset: 1.0})
      ]))
    ])
  ]);
}
