export interface Project {
  name: string;
  integrationName: string;
  platform: string;
  webUrl: string;
}

export interface System {
  name: string;
  systemId: string;
  projects: Project[];
}
