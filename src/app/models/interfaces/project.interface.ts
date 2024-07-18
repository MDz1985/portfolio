export interface Project {
  id: number;
  name: string;
  description: string;
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
