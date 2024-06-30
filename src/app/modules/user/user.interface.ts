export type TUser = {
  id: string;
  password: string;
  email: string;
  needsPasswordChange: boolean;
  role: 'super-admin' | 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
