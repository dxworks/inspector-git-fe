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

export interface LocalSystem {
  name: string;
  id: string;
  sources: string[];
}
