import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().cuid().optional(),
  email: z.string().email(),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  password: z.string().min(8).optional(),
});

export const TenantSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  domain: z.string().url().optional().nullable(),
});

export type UserDto = z.infer<typeof UserSchema>;
export type TenantDto = z.infer<typeof TenantSchema>;
