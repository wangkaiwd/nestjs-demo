export type PermissionType = 'read' | 'write';

export interface Permission {
  [key: string]: PermissionType[];
}
