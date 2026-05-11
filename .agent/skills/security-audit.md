# Security Audit Skill

## Goal
A checklist for auditing the security and permissions of the XoX project.

## Instructions
1. Review the `packages/rbac/index.ts` for any overly permissive rules (e.g., unnecessary `manage all` permissions).
2. Check that all sensitive API routes in `apps/web` or `services/` have middleware or guards that verify authentication and authorization.
3. Verify that database queries in `packages/database` are using proper tenant filtering to prevent cross-tenant data leakage.
4. Run `pnpm audit` at the root to check for vulnerable dependencies.
5. Inspect the `.env` files to ensure no sensitive credentials are hardcoded or checked into version control.
6. Report any findings to the user with recommendations for remediation.
