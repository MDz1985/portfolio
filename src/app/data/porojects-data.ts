import { ProjectGroup } from 'src/app/models/interfaces/project.interface';
import { EARLY_FRONTEND_PROJECTS } from 'src/app/data/projects/early-frontend-projects';
import { EARLY_BACKEND_PROJECTS } from 'src/app/data/projects/early-backend-projects';
import { COMMAND_FRONTEND_PROJECTS } from 'src/app/data/projects/command-frontend-projects';
import { COMMERCIAL_PROJECTS } from 'src/app/data/projects/commercial-projects';

export const PROJECTS_DATA: ProjectGroup[] = [
  {
    id: 1,
    name: 'Early frontend projects',
    description: 'Early frontend projects',
    projects: EARLY_FRONTEND_PROJECTS
  },
  {
    id: 2,
    name: 'Early backend projects',
    description: 'Early backend projects',
    projects: EARLY_BACKEND_PROJECTS
  },
  {
    id: 3,
    name: 'Command frontend projects',
    description: 'Other projects',
    projects: COMMAND_FRONTEND_PROJECTS
  },
  {
    id: 4,
    name: 'Commercial projects',
    description: 'Commercial projects',
    projects: COMMERCIAL_PROJECTS
  },
];
