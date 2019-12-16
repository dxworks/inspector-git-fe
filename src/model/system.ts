export interface Project {
  name: string;
  path: string;
  integrationName: string;
}

export interface System {
  name: string;
  systemId: string;
  projects: Project[];
}
