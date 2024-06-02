import UserModel from '../../modules/user/user.model';

const findLastFacultyMemberId = async (): Promise<string | undefined> => {
  const lastFaculty = await UserModel.findOne(
    {
      role: 'faculty',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id : undefined;
};

export const generateFacultyMemberId = async (): Promise<string> => {
  let newFacultyId = '';

  const lastFacultyMemberId = await findLastFacultyMemberId();

  if (!lastFacultyMemberId) {
    newFacultyId = 'F-0001';
  } else {
    // Extract the numeric part of the ID
    const numericPart = parseInt(lastFacultyMemberId.split('-')[1], 4);
    // Increment the numeric part
    const incrementedPart = numericPart + 1;
    // Format the new ID with leading zeros
    newFacultyId = `F-${incrementedPart.toString().padStart(4, '0')}`;
  }

  return newFacultyId;
};
