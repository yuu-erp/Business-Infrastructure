# API Endpoint Creator Skill

## Goal
Guidance on creating a new API endpoint in the XoX monorepo, ensuring consistency across the Next.js (web) and backend services.

## Instructions
1. Identify the package or app where the endpoint is needed (e.g., `apps/web` or a service in `services/`).
2. Define the Zod schema for the request/response in `packages/types/schemas.ts`.
3. Implement the business logic in the corresponding service.
4. Create the route handler:
   - For Next.js: Add a file in `apps/web/app/api/.../route.ts`.
   - For NestJS: Update the controller and service in the appropriate service directory.
5. Apply RBAC permissions using `@xox/rbac` to protect the endpoint.
6. Verify the endpoint using a tool like `curl` or by writing a test in the package.
