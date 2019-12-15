export interface SimpleProjectDTO {
  id: string;
  description?: string;
  defaultBranch?: string;
  sshUrlToRepo?: string;
  httpUrlToRepo?: string;
  webUrl?: string;
  readmeUrl?: string;
  name?: string;
  nameWithNamespace?: string;
  path?: string;
  pathWithNamespace?: string;
  avatarUrl?: string;
}
