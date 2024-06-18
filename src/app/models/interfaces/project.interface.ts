export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  deploy: string;
}

export interface ProjectGroup {
  id: number;
  name: string;
  description: string;
  projects: Project[];
}
