import { z } from 'zod';

const userNameValidation = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

const guardianValidation = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const localGuardianValidation = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const studentValidation = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidation,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string().min(1),
      emergencyContactNo: z.string().min(1),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().min(1),
      permanentAddress: z.string().min(1),
      guardian: guardianValidation,
      localGuardian: localGuardianValidation,
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
    }),
  }),
});

const studentUpdateValidation = z.object({
  body: z.object({
    student: z
      .object({
        name: userNameValidation.optional(),
        gender: z.enum(['male', 'female']).optional(),
        dateOfBirth: z.string().optional(),
        email: z.string().email().optional(),
        contactNo: z.string().min(1).optional(),
        emergencyContactNo: z.string().min(1).optional(),
        bloogGroup: z
          .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
          .optional(),
        presentAddress: z.string().min(1).optional(),
        permanentAddress: z.string().min(1).optional(),
        guardian: guardianValidation.optional(),
        localGuardian: localGuardianValidation.optional(),
        profileImg: z.string().url().optional(),
        admissionSemester: z.string().optional(),
      })
      .optional(),
  }),
});

export const validateStudentRequest = {
  studentValidation,
  studentUpdateValidation,
};
