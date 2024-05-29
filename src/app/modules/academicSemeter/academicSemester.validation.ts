import { z } from 'zod';

const TMonths = z.enum([
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
]);

const TAcademicSemesterName = z.enum(['Autumn', 'Summer', 'Fall']);
const TAcademicSemesterCode = z.enum(['01', '02', '03']);

const academicSemesterValidation = z.object({
  body: z.object({
    name: TAcademicSemesterName,
    code: TAcademicSemesterCode,
    year: z.string(),
    startMonth: TMonths,
    endMonth: TMonths,
  }),
});

const academicSemesterUpdateValidation = z.object({
  body: z.object({
    name: TAcademicSemesterName.optional(),
    code: TAcademicSemesterCode.optional(),
    year: z.string().optional(),
    startMonth: TMonths.optional(),
    endMonth: TMonths.optional(),
  }),
});

export const validateAcademicSemester = {
  academicSemesterValidation,
  academicSemesterUpdateValidation,
};
