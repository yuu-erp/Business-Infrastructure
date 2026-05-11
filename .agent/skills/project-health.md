# Project Health Skill

## Goal
Performs a comprehensive health check of the monorepo by running build and lint processes to ensure code quality and build stability.

## Instructions
1. Run the build and lint commands using turbo at the root:
   ```bash
   pnpm build --filter=...
   pnpm lint --filter=...
   ```
2. Monitor the output for any errors.
3. If errors occur, identify the failing package and report the specific errors to the user.
