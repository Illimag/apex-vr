import {trigger, state, animate, style, transition, group} from '@angular/animations';

export function navLinkAnimations() {
  return navLinkAnimate();
}

function navLinkAnimate() {
  return trigger('animateLink', [
    state('active' , style({ opacity: 1, transform: 'translateX(0)' })),
    state('inactive', style({ opacity: 0, transform: 'translateX(-15%)' })),
    transition('inactive => active', [
      group([
        animate('0.4s ease-in', style({
          opacity: 1
        })),
        animate('0.5s ease', style({
          transform: 'translate3d(0, 0, 0)',
        }))
      ])
    ]),
    transition('active => inactive', [
      group([
        animate('0.3s', style({
          opacity: 0
        })),
        animate('0.1s 0.3s ease', style({
          transform: 'translate3d(15%, 0, 0)'
        }))
      ])
    ])
  ]);
}
