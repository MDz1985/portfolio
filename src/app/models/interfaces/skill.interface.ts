export interface SkillGroup extends Skills {
  groupName: string;
}

export interface Skills {
  skills: string[];
  rarelyUsedSkills: string[];
}
