import { z } from 'zod';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Winter', 'Fall', 'Summer'], {
      required_error: 'Title is required',
    }),
    year: z.string({ required_error: 'Year is required' }),
    code: z.enum(['01', '02', '03'], { required_error: 'Code is required' }),
    startMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      { required_error: 'Start month is required' }
    ),
    endMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      { required_error: 'Start month is required' }
    ),
  }),
});

const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum(['Winter', 'Fall', 'Summer'], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z.string({ required_error: 'Year is required' }).optional(),
      code: z
        .enum(['01', '02', '03'], { required_error: 'Code is required' })
        .optional(),
      startMonth: z
        .enum(
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          { required_error: 'Start month is required' }
        )
        .optional(),
      endMonth: z
        .enum(
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          { required_error: 'Start month is required' }
        )
        .optional(),
    }),
  })
  // Ensure 1: Route Level : Update -->  Give me title and code both , or neither
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );

export const AcademicSemesterZodValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
