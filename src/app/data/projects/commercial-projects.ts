import { ISkill, Project } from 'src/app/models/interfaces/project.interface';

export const COMMERCIAL_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Game pog',
    description: 'Game site',
    technologies: [
      ISkill.ANGULAR,
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.ANGULAR_MATERIAL,
      ISkill.RXJS,
      ISkill.NGRX,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/game-pog/slider.png',
      main: '',
    },
    github: '',
    deploy: 'https://gamepog.com/'
  },
  {
    id: 2,
    name: 'Game host',
    description: 'Game store',
    technologies: [
      ISkill.ANGULAR,
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.ANGULAR_MATERIAL,
      ISkill.TAILWIND,
      ISkill.RXJS,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/game-host/slider.png',
      main: '',
    },
    github: '',
    deploy: ''
  },
  {
    id: 3,
    name: 'EventUI',
    description: 'EventUI',
    technologies: [
      ISkill.ANGULAR,
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.ANGULAR_MATERIAL,
      ISkill.TAILWIND,
      ISkill.MATERIAL_WEB,
      ISkill.WORDPRESS,
      ISkill.PHP,
      ISkill.JS,
      ISkill.WEB_COMPONENTS,
      ISkill.MYSQL,
      ISkill.REACTIVE_FORMS,
      ISkill.RXJS,
      ISkill.RX_ANGULAR,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/event-ui/slider.png',
      main: '',
    },
    github: '',
    deploy: 'https://app.eventui.pl'
  },
];
