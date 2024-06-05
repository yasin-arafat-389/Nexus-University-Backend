import UserModel from '../../modules/user/user.model';

const findLastAdminId = async (): Promise<string | undefined> => {
  const lastAdmin = await UserModel.findOne(
    {
      role: 'admin',
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

  return lastAdmin?.id ? lastAdmin.id : undefined;
};

export const generateAdminId = async (): Promise<string> => {
  let newAdminId = '';

  const lastAdminId = await findLastAdminId();

  if (!lastAdminId) {
    newAdminId = 'A-0001';
  } else {
    // Extract the numeric part of the ID
    const numericPart = parseInt(lastAdminId.split('-')[1], 4);
    // Increment the numeric part
    const incrementedPart = numericPart + 1;
    // Format the new ID with leading zeros
    newAdminId = `A-${incrementedPart.toString().padStart(4, '0')}`;
  }

  return newAdminId;
};
