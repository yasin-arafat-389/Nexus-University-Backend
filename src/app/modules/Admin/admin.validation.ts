import { z } from 'zod';

const AdminValidation = z.object({
  body: z.object({
    password: z.string(),
    adminData: z.object({
      designation: z.string(),
      name: z.object({
        firstName: z.string(),
        middleName: z.string().optional(),
        lastName: z.string(),
      }),
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      profileImg: z.string().url().optional(),
      isDeleted: z.boolean().optional().default(false),
    }),
  }),
});

const AdminUpdateValidation = z.object({
  body: z.object({
    designation: z.string(),
    name: z.object({
      firstName: z.string(),
      middleName: z.string().optional(),
      lastName: z.string(),
    }),
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloogGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
      .optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    profileImg: z.string().url().optional(),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const validateAdmin = {
  AdminValidation,
  AdminUpdateValidation,
};
