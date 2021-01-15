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
  issues: string[];
  remotes: string[];
  computeAnnotatedLines: boolean;
}

export interface ScriptResponse {
  log: string;
  results: string[]
}

export interface ResultFile {
  fileName: string;
  content: string;
}
