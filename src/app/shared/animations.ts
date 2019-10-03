import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%', opacity: "1" })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({  transform: 'scale(1.2)', filter: 'blur(10px)' }),
        animate('1.5s ease-in-out', style({  transform: 'scale(1)', filter: 'blur(0px)' }))
      ], { optional: true }),
      query(':leave', [
        style({  opacity: "1", transform: 'scale(1)' }),
        animate('0.7s ease-in-out', style({ opacity: "0", transform: 'scale(1.2)' }))
      ], { optional: true }),
    ])
  ])
])


// filter: blur(2px);
// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     /* order */
//     /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
//       , { optional: true }),
//     /* 2 */ group([  // block executes in parallel
//       query(':enter', [
//         style({ transform: 'translateY(100%)' }),
//         animate('2.5s ease-in-out', style({ transform: 'translateY(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateY(0%)' }),
//         animate('2.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
//       ], { optional: true }),
//     ])
//   ])
// ])