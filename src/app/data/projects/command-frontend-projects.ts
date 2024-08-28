import { ISkill, Project } from 'src/app/models/interfaces/project.interface';
import { GITHUB_URL } from 'src/app/data/projects/early-frontend-projects';

export const COMMAND_FRONTEND_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Language learning',
    description: 'Application for learning English words. Includes an electronic textbook with a database of words to learn, mini-games' +
      ' to review, and a statistics page to track individual progress. It was made in the team of 2 people.',
    technologies: [
      ISkill.HTML,
      ISkill.CSS,
      ISkill.TS,
      ISkill.SASS,
      ISkill.WEBPACK,
      ISkill.GOODLE_CHARTS,
      ISkill.GIT
    ],
    image: {
      slider: '/projects/language-learning/slider.png',
      main: ['']
    },
    github: `${ GITHUB_URL }rslang-app`,
    deploy: ''
  },
  {
    id: 2,
    name: 'Project manager',
    description: 'An application for managing the project creation process. Includes boards where you can create columns with necessary tasks. You can move tasks in column and drop columns, edit or delete them. You can also swap columns. The application is localized (en/ru). It was made in the team of 3 people.',
    image: {
      slider: '',
      main: ['']
    },
    github: 'https://github.com/MDz1985/file-manager',
    deploy: ''
  },
];
