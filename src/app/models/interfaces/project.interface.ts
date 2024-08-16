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
  main: string;
}

export enum ISkill {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JS',
  TS = 'TS',
  ANGULAR = 'Angular',
  NEST = 'NestJS',
  NODE = 'NodeJS',
  PHP = 'PHP',
  MYSQL = 'MySQL',
  WORDPRESS = 'WordPress',
  GIT = 'Git',
  GITHUB = 'GitHub',
  DOCKER = 'Docker',
  JEST = 'Jest',
  REACT = 'React',
  REDUX = 'Redux',
  SASS = 'SASS/SCSS',
  BOOTSTRAP = 'Bootstrap',
  TYPESCRIPT = 'TypeScript',
  ANGULAR_MATERIAL = 'Angular Material',
  TAILWIND = 'Tailwind',
  WEBPACK = 'Webpack',
}
