# RBAC Helper Skill

## Goal
Helps the agent understand and explain the Role-Based Access Control (RBAC) configuration, including available system roles and permission keys.

## Instructions
1. Read the RBAC configuration file at `packages/rbac/index.ts`.
2. Search for `SYSTEM_ROLES` and `PERMISSIONS` definitions using `grep` or by reading the file content.
3. List the available roles and permission keys to the user.
4. When implementing new features, ensure the appropriate permission keys from this file are used.
