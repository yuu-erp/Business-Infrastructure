export const PERMISSIONS = {
  USERS_VIEW: "users.view",
  USERS_CREATE: "users.create",
  USERS_EDIT: "users.edit",
  USERS_DELETE: "users.delete",
  
  TENANT_VIEW: "tenant.view",
  TENANT_EDIT: "tenant.edit",
  
  HRM_VIEW: "hrm.view",
  HRM_MANAGE: "hrm.manage",
} as const;

export type PermissionCode = typeof PERMISSIONS[keyof typeof PERMISSIONS];

export const SYSTEM_ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  TENANT_ADMIN: "TENANT_ADMIN",
  USER: "USER",
} as const;
