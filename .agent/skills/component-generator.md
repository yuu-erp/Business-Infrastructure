# Component Generator Skill

## Goal
Instructions for creating and exporting a new UI component in the shared `packages/ui` library.

## Instructions
1. Navigate to `packages/ui/src/components`.
2. Create a new directory for the component (e.g., `Button`).
3. Implement the component logic in `index.tsx` and styles in `styles.css`.
4. Ensure the component is accessible and responsive.
5. Export the new component from `packages/ui/src/index.ts`.
6. Run the build process for `@xox/ui` to verify there are no errors:
   ```bash
   pnpm build --filter=@xox/ui
   ```
7. Use the component in `apps/web` to verify it works as expected.
