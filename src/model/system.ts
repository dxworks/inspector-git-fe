export interface Project {
  name: string;
  integrationName: string;
  platform: string;
  webUrl: string;
  imported: boolean;
}

export interface System {
  name: string;
  systemId: string;
  projects: Project[];
}
