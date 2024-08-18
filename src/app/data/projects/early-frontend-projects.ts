import { ISkill, Project } from 'src/app/models/interfaces/project.interface';

export const GITHUB_URL = 'https://github.com/MDz1985/';
export const EARLY_FRONTEND_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Double slider',
    description: 'Simple double vertical slider, controlled by clicking and scrolling',
    technologies: [ISkill.HTML, ISkill.CSS, ISkill.JS, ISkill.GIT],
    image: {
      slider: '/projects/double-slider/slider.png',
      main: '',
    },
    github: `${ GITHUB_URL }double-slider`,
    deploy: 'https://double-slider-mdz1985.netlify.app/'
  },
  {
    id: 2,
    name: 'Museum',
    description: 'Website based on Figma layout. It contains with slider, video player, random image sorting, built-in map, parallax ets.',
    technologies: [ISkill.HTML, ISkill.CSS, ISkill.JS, ISkill.SASS, ISkill.GIT],
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
    description: 'Dual-language web site with slider, custom audio-player, date/time, weather, todo-list ets.',
    technologies: [ISkill.HTML, ISkill.CSS, ISkill.JS, ISkill.SASS, ISkill.WEBPACK, ISkill.GIT],
    image: {
      slider: '/projects/momentum/slider.png',
      main: '',
    },
    github: `${ GITHUB_URL }momentum`,
    deploy: 'https://momentum-mdz1985.netlify.app/'
  },
  {
    id: 4,
    name: 'Custom video player',
    description: 'Custom video player with user interface and keys control',
    technologies: [ISkill.HTML, ISkill.CSS, ISkill.JS, ISkill.GIT],
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
    description: `The game is based on a lot of asynchronous requests to the server. Choose a car or create your own. It is also possible to
                  generate automatically 100 cars. It is possible to start the engine of the selected car and drive the track. Or hold a
                  competition between all the cars on this page. You can change the colour and name of each car.`,
    technologies: [ISkill.HTML, ISkill.CSS, ISkill.TS, ISkill.WEBPACK, ISkill.GIT],
    image: {
      slider: '/projects/async-race/slider.png',
      main: '',
    },
    github: `${ GITHUB_URL }async-race`,
    deploy: 'https://async-race-mdz1985.netlify.app/'
  },
  {
    id: 6,
    name: 'Christmas time',
    description: 'This game will put you in the Christmas spirit. You will be able to decorate the selected virtual Christmas tree with toys and garlands.',
    technologies: [ISkill.HTML, ISkill.CSS, ISkill.TS, ISkill.SASS, ISkill.WEBPACK, ISkill.GIT],
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
    technologies: [ISkill.ANGULAR, ISkill.HTML, ISkill.CSS, ISkill.TS, ISkill.SASS, ISkill.GRAPHQL, ISkill.TAILWIND, ISkill.GIT],
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
    technologies: [ISkill.ANGULAR, ISkill.HTML, ISkill.CSS, ISkill.TS, ISkill.SASS, ISkill.ANGULAR_MATERIAL, ISkill.GIT],
    image: {
      slider: '',
      main: ''
    },
    github: 'https://github.com/MDz1985/youtube-client',
    deploy: ''
  }

];
