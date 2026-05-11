# DB Summary Skill

## Goal
Provides a comprehensive overview of the database schema, models, and enums defined in the Prisma schema of the XoX project.

## Instructions
1. Locate the Prisma schema file at `packages/database/prisma/schema.prisma`.
2. Extract models and enums using `grep` or by reading the file:
   ```bash
   grep -E "model|enum" packages/database/prisma/schema.prisma
   ```
3. Summarize the findings, grouping by Models and Enums.
4. Report the findings to the user, highlighting the core entities.
