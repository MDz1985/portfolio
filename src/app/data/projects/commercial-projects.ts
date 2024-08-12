import { Project } from 'src/app/models/interfaces/project.interface';

export const COMMERCIAL_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Game pog',
    description: 'Game site',
    image: {
      slider: '/projects/game-pog/slider.png',
      main: '/projects/game-pog/main.png',
    },
    github: '',
    deploy: 'https://gamepog.com/'
  },
  {
    id: 2,
    name: 'Game host',
    description: 'Game store',
    image: {
      slider: '/projects/game-host/slider.png',
      main: '/projects/game-host/main.png',
    },
    github: '',
    deploy: ''
  },
  {
    id: 3,
    name: 'EventUI',
    description: 'EventUI',
    image: {
      slider: '/projects/event-ui/slider.png',
      main: '/projects/event-ui/main.png',
    },
    github: '',
    deploy: 'https://app.eventui.pl'
  },
];
