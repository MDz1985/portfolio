import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const stepsLeft = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({left: '-100%'})], {optional: true}),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [animate('300ms ease-out', style({left: '100%'}))], {optional: true}),
    query(':enter', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
  ]),
]

const stepsRight = [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({left: '100%'})], {optional: true}),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [animate('300ms ease-out', style({left: '-100%'}))], {optional: true}),
    query(':enter', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
  ]),
]

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => AboutPage', stepsLeft),
    transition('* => GalleryPage', stepsRight),
    transition('AboutPage => SkillsPage', stepsRight),
    transition('* => SkillsPage', stepsLeft),
    transition('GalleryPage => CertificatesPage', stepsLeft),
    transition('* => CertificatesPage', stepsRight),
  ])

