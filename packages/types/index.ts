export interface UserContext {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface TenantContext {
  id: string;
  slug: string;
  name: string;
}

export interface AuthContext {
  user: UserContext;
  tenant?: TenantContext;
  role?: string;
  permissions: string[];
}
