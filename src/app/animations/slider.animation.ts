import { animate, animateChild, AnimationTriggerMetadata, group, query, style, transition, trigger } from '@angular/animations';

const stepsLeft = [
  style({position: 'relative'}),
  query(':enter:not(.exclude-from-animation), :leave:not(.exclude-from-animation)', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ], {optional: true}),
  query(':enter:not(.exclude-from-animation)', [style({left: '-100%'})], {optional: true}),
  query(':leave:not(.exclude-from-animation)', animateChild(), {optional: true}),
  group([
    query(':leave:not(.exclude-from-animation)', [animate('300ms ease-out', style({left: '100%'}))], {optional: true}),
    query(':enter:not(.exclude-from-animation)', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
  ]),
]

const stepsRight = [
  style({position: 'relative'}),
  query(':enter:not(.exclude-from-animation), :leave:not(.exclude-from-animation)', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ], {optional: true}),
  query(':enter:not(.exclude-from-animation)', [style({left: '100%'})], {optional: true}),
  query(':leave:not(.exclude-from-animation)', animateChild(), {optional: true}),
  group([
    query(':leave:not(.exclude-from-animation)', [animate('300ms ease-out', style({left: '-100%'}))], {optional: true}),
    query(':enter:not(.exclude-from-animation)', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
  ]),
]

export const slideInAnimation: AnimationTriggerMetadata =
  trigger('routeAnimations', [
    transition('SkillsPage => AboutPage, CertificatesPage => AboutPage, GalleryPage => AboutPage', stepsLeft),
    transition('SkillsPage => GalleryPage, CertificatesPage => GalleryPage, AboutPage => GalleryPage', stepsRight),
    transition('AboutPage => SkillsPage', stepsRight),
    transition('GalleryPage => SkillsPage, CertificatesPage => SkillsPage', stepsLeft),
    transition('GalleryPage => CertificatesPage', stepsLeft),
    transition('SkillsPage => CertificatesPage, AboutPage => CertificatesPage', stepsRight),
  ])

