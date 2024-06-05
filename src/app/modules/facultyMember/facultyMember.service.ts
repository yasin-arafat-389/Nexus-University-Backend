import onFailure from '../../utils/onFailure/onFailure';
import { TFacultyMember } from './facultyMember.interface';
import { FacultyMemberModel } from './facultyMember.model';

const GetAllFacultyMember = async () => {
  const result = await FacultyMemberModel.find()
    .populate('user')
    .populate('academicDepartment');
  return result;
};

const GetSingleFacultyMember = async (id: string) => {
  const result = await FacultyMemberModel.findOne({ id })
    .populate('user')
    .populate('academicDepartment');
  return result;
};

const UpdateFacultyMember = async (
  id: string,
  payload: Partial<TFacultyMember>,
) => {
  const { name, ...remainingFacultyMemberData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingFacultyMemberData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  console.log(id);
  console.log(payload);

  const result = await FacultyMemberModel.findOneAndUpdate(
    { id },
    modifiedUpdatedData,
    {
      new: true,
      runValidators: true,
    },
  );

  onFailure(result, 'ID not found!!');
  return result;
};

const DeleteFacultyMember = async (id: string) => {
  const result = await FacultyMemberModel.findOneAndUpdate(
    { id },
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const FacultyMemberServices = {
  GetAllFacultyMember,
  GetSingleFacultyMember,
  UpdateFacultyMember,
  DeleteFacultyMember,
};
