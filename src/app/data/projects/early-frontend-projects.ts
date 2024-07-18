import { Project } from 'src/app/models/interfaces/project.interface';

export const GITHUB_URL = 'https://github.com/MDz1985/';
export const EARLY_FRONTEND_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Double slider',
    description: 'Double slider',
    image: {
      slider: '/projects/double-slider/slider.png',
      main: '/projects/double-slider/main.png',
    },
    github: `${ GITHUB_URL }double-slider`,
    deploy: '1'
  },
  {
    id: 2,
    name: 'Museum',
    description: 'Museum',
    image: {
      slider: '',
      main: ''
    },
    github: `${ GITHUB_URL }museum`,
    deploy: ''
  },
  {
    id: 3,
    name: 'Momentum',
    description: 'Momentum',
    image: {
      slider: '/projects/momentum/slider.png',
      main: '/projects/momentum/main.png',
    },
    github: `${ GITHUB_URL }momentum`,
    deploy: ''
  },
  {
    id: 4,
    name: 'Custom video player',
    description: 'Custom video player',
    image: {
      slider: '',
      main: ''
    },
    github: `${ GITHUB_URL }custom-video-player`,
    deploy: ''
  },
  {
    id: 5,
    name: 'Async race',
    description: 'Async race',
    image: {
      slider: '/projects/async-race/slider.png',
      main: '/projects/async-race/main.png',
    },
    github: `${ GITHUB_URL }async-race`,
    deploy: ''
  },
  {
    id: 6,
    name: 'Christmas time',
    description: 'Christmas time',
    image: {
      slider: '',
      main: ''
    },
    github: `${ GITHUB_URL }christmas-time`,
    deploy: ''
  },
  {
    id: 7,
    name: 'Recipes',
    description: 'Recipes',
    image: {
      slider: '',
      main: ''
    },
    github: 'https://github.com/vozmi-dranik/recipes',
    deploy: ''
  }
];
