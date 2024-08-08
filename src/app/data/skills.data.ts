import { SkillGroup } from 'src/app/models/interfaces/skill.interface';
import { FRONTEND_SKILLS } from 'src/app/data/skills/frontend-skills';
import { BACKEND_SKILLS } from 'src/app/data/skills/backend-skills';
import { SOFTWARE_SKILLS } from 'src/app/data/skills/software-skills';
import { SOFT_SKILLS } from 'src/app/data/skills/soft-skills';

export const SKILLS_DATA: SkillGroup[] = [
  {
    groupName: 'Frontend skills',
    ...FRONTEND_SKILLS
  },
  {
    groupName: 'Backend skills',
    ...BACKEND_SKILLS
  },
  {
    groupName: 'Software skills',
    ...SOFTWARE_SKILLS
  },
  {
    groupName: 'Soft skills',
    ...SOFT_SKILLS
  }
];
