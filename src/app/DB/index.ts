import config from '../config';
import UserModel from '../modules/user/user.model';

const superUser = {
  id: config.super_admin_id,
  email: config.super_admin_email,
  password: config.super_admin_password,
  needsPasswordChange: false,
  role: 'super-admin',
  status: 'in-progress',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExits = await UserModel.findOne({ role: 'super-admin' });

  if (!isSuperAdminExits) {
    await UserModel.create(superUser);
  }
};

export default seedSuperAdmin;
