import { AbilityBuilder, PureAbility, AbilityClass, ExtractSubjectType, InferSubjects } from '@casl/ability';

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

export type SystemRole = typeof SYSTEM_ROLES[keyof typeof SYSTEM_ROLES];

// Subject types for CASL
export type Subjects = InferSubjects<'User' | 'Tenant' | 'Membership' | 'all'>;
export type AppAbility = PureAbility<[string, Subjects]>;

export const AppAbility = PureAbility as AbilityClass<AppAbility>;

export function defineAbilityFor(role: SystemRole, userId: string) {
  const { can, build } = new AbilityBuilder(AppAbility);

  if (role === SYSTEM_ROLES.SUPER_ADMIN) {
    can('manage', 'all');
  } else if (role === SYSTEM_ROLES.TENANT_ADMIN) {
    can('read', 'Tenant');
    can('update', 'Tenant');
    can('manage', 'User');
    can('manage', 'Membership');
  } else {
    can('read', 'User', { id: userId });
    can('read', 'Tenant');
  }

  return build({
    detectSubjectType: (item) => (item as any).constructor.name as ExtractSubjectType<Subjects>,
  });
}
