import { Project } from 'src/app/models/interfaces/project.interface';
import { GITHUB_URL } from 'src/app/data/projects/early-frontend-projects';

export const COMMAND_FRONTEND_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Language learning',
    description: 'Language learning',
    image: {
      slider: '/projects/language-learning/slider.png',
      main: ''
    },
    github: `${ GITHUB_URL }rslang-app`,
    deploy: ''
  },
  {
    id: 2,
    name: 'File manager',
    description: 'File manager',
    image: {
      slider: '',
      main: ''
    },
    github: 'https://github.com/MDz1985/file-manager',
    deploy: ''
  },
];
