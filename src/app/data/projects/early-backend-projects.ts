import { ISkill, Project } from 'src/app/models/interfaces/project.interface';

export const EARLY_BACKEND_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Battleship',
    description: 'web-socket based game',
    technologies: [ISkill.NODE, ISkill.TS, ISkill.WEB_SOCKET, ISkill.WEBPACK,ISkill.GIT],
    image: {
      slider: '',
      main: ['']
    },
    github: 'https://github.com/MDz1985/battleship/',
    deploy: ''
  },
  {
    id: 2,
    name: 'Recipes',
    description: 'Backend for Recipes project.',
    technologies: [ISkill.NEST, ISkill.NODE, ISkill.TS, ISkill.POSTGRES, ISkill.FASTIFY, ISkill.GRAPHQL, ISkill.GIT],
    image: {
      slider: '',
      main: ['']
    },
    github: 'https://github.com/vozmi-dranik/recipes-back',
    deploy: ''
  },
  {
    id: 3,
    name: 'CRUD API',
    description: 'Basic CRUD API',
    technologies: [ISkill.NODE, ISkill.TS, ISkill.WEBPACK, ISkill.GIT],
    image: {
      slider: '',
      main: ['']
    },
    github: 'https://github.com/MDz1985/crud-api/',
    deploy: ''
  },
  {
    id: 4,
    name: 'Home library',
    description: 'Home library',
    technologies: [ISkill.NEST, ISkill.NODE, ISkill.TS, ISkill.DOCKER, ISkill.PRISMA, ISkill.FASTIFY, ISkill.JWT,ISkill.GIT],
    image: {
      slider: '',
      main: ['']
    },
    github: 'https://github.com/MDz1985/nodejs2024Q1-service',
    deploy: ''
  },
];
