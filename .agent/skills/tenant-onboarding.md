# Tenant Onboarding Skill

## Goal
A step-by-step process for onboarding a new tenant into the XoX SaaS platform.

## Instructions
1. Use the Prisma client to create a new entry in the `Tenant` table.
2. Define the initial `TenantAdmin` user for the tenant.
3. Set up the `Membership` and `Role` assignments for the initial user.
4. Verify the tenant's isolation:
   - Ensure that the `tenantId` is correctly associated with all tenant-specific data.
   - Check that the `rbac` rules correctly prevent access to other tenants' data.
5. Update the tenant's status to `ACTIVE`.
6. Log the successful onboarding event for audit purposes.
