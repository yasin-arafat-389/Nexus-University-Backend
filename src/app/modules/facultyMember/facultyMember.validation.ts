import { z } from 'zod';

export const facultyMemberValidation = z.object({
  body: z.object({
    password: z.string(),
    facultyMember: z.object({
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
      profileImg: z.string(),
      academicDepartment: z.string(),
      isDeleted: z.boolean().default(false),
    }),
  }),
});

const facultyMemberUpdateValidation = z.object({
  designation: z.string().optional(),
  name: z
    .object({
      firstName: z.string().optional(),
      middleName: z.string().optional(),
      lastName: z.string().optional(),
    })
    .optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().email().optional(),
  contactNo: z.string().optional(),
  emergencyContactNo: z.string().optional(),
  bloogGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),
  profileImg: z.string().optional(),
  academicDepartment: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

export const validateFacultyMember = {
  facultyMemberValidation,
  facultyMemberUpdateValidation,
};
