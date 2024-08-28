export interface Project {
  id: number;
  name: string;
  description: string;
  technologies?: ISkill[];
  image: Image;
  github: string;
  deploy: string;
}

export interface ProjectGroup {
  id: number;
  name: string;
  description: string;
  projects: Project[];
}

export interface Image {
  slider: string;
  main: string[];
}

export enum ISkill {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JavaScript',
  TS = 'TypeScript',
  ANGULAR = 'Angular',
  NEST = 'NestJS',
  NODE = 'NodeJS',
  PHP = 'PHP',
  MYSQL = 'MySQL',
  WORDPRESS = 'WordPress',
  GIT = 'Git',
  GITHUB = 'GitHub',
  DOCKER = 'Docker',
  PRISMA = 'PrismaORM',
  JEST = 'Jest',
  REACT = 'React',
  REDUX = 'Redux',
  SASS = 'SASS/SCSS',
  BOOTSTRAP = 'Bootstrap',
  ANGULAR_MATERIAL = 'Angular Material',
  TAILWIND = 'Tailwind',
  WEBPACK = 'Webpack',
  GRAPHQL = 'GraphQL',
  POSTGRES = 'PostgreSQL',
  JWT = 'JWT',
  WEB_SOCKET = 'Web Socket',
  FASTIFY = 'Fastify',
  MATERIAL_WEB = 'Material Web',
  WEB_COMPONENTS = 'Web Components',
  REACTIVE_FORMS = 'Reactive Forms',
  RXJS = 'RxJS',
  NGRX = 'NgRx',
  RX_ANGULAR = 'RxAngular',
  GOODLE_CHARTS = 'Google Charts',
}
