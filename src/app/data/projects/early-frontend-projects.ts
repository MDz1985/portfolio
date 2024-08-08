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
    deploy: 'https://double-slider-mdz1985.netlify.app/'
  },
  {
    id: 2,
    name: 'Museum',
    description: 'Museum',
    image: {
      slider: '/projects/museum/slider.png',
      main: ''
    },
    github: `${ GITHUB_URL }museum`,
    deploy: 'https://museum-mdz1985.netlify.app/'
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
    deploy: 'https://momentum-mdz1985.netlify.app/'
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
    deploy: 'https://async-race-mdz1985.netlify.app/'
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
    deploy: 'https://christmas-mdz1985.netlify.app/'
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
    deploy: 'https://recipes-91982.web.app/'
  },
  {
    id: 8,
    name: 'Youtube client',
    description: 'Youtube client',
    image: {
      slider: '',
      main: ''
    },
    github: 'https://github.com/MDz1985/youtube-client',
    deploy: ''
  }

];
