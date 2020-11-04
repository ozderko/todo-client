import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('isHome => isAuth', [
      query(':enter, :leave', [
        style({
          position: 'fixed',
          top: 0,
          right: 0,
        })
      ], {optional: true}),
      query(':enter', [
        style({
          transform: 'translateX(100%)'
        })
      ], {optional: true}),
      query(':leave', [
        style({
          transform: 'translateX(0%)'
        })
      ], {optional: true}),
      group([
        query(':leave', [
          animate('500ms ease-in-out', style({transform: 'translateX(-100%)'}))
        ], {optional: true}),
        query(':enter', [
          animate('500ms ease-in-out', style({transform: 'translateX(0%)'}))
        ], {optional: true})
      ]),
    ]),
    transition('isAuth => isHome', [
      query(':enter, :leave', [
        style({
          position: 'fixed',
          top: 0,
          left: 0,
        })
      ], {optional: true}),
      query(':enter', [
        style({
          transform: 'translateX(-100%)'
        })
      ], {optional: true}),
      query(':leave', [
        style({
          transform: 'translateX(0%)'
        })
      ], {optional: true}),
      group([
        query(':leave', [
          animate('500ms ease-out', style({transform: 'translateX(100%)'}))
        ], {optional: true}),
        query(':enter', [
          animate('500ms ease-out', style({transform: 'translateX(0%)'}))
        ], {optional: true})
      ]),
    ]),
  ]);
