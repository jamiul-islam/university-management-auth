import { z } from 'zod';

// request validation
// body --> object
// data --> object

// zod schema
const createZodSchema = z.object({
  body: z.object({
    user: z.object({
      role: z.string({
        required_error: 'role is required',
      }),
      password: z.string().optional(),
    }),
  }),
});

export const UserZodValidation = {
  createZodSchema,
};
