import { z } from 'zod';

const facultyMemberValidation = z.object({
  body: z.object({
    password: z.string(),
    facultyMember: z.object({
      name: z.string().min(1),
      academicDepartment: z
        .string()
        .min(1)
        .regex(/^[0-9a-fA-F]{24}$/),
    }),
  }),
});

const facultyMemberUpdateValidation = z.object({
  body: z.object({
    facultyMember: z.object({
      name: z.string().min(1).optional(),
      academicDepartment: z
        .string()
        .min(1)
        .regex(/^[0-9a-fA-F]{24}$/)
        .optional(),
    }),
  }),
});

export const validateFacultyMember = {
  facultyMemberValidation,
  facultyMemberUpdateValidation,
};
