import FacultyMemberModel from './facultyMember.model';

const GetAllFacultyMember = async () => {
  const result = await FacultyMemberModel.find()
    .populate('user')
    .populate('academicDepartment');

  return result;
};

export const FacultyMemberServices = {
  GetAllFacultyMember,
};
