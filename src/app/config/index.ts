import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,

  bcrypt_salt_rounds: 10,

  port: process.env.PORT,

  database_url: process.env.DATABASE_URL,

  default_pass: process.env.DEFAULT_PASS,

  jwt_acess_token_secret: process.env.JWT_ACESS_TOKEN_SECRET,

  jwt_refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,

  access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,

  refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,

  reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,

  smtp_host: process.env.SMTP_HOST,

  smtp_port: process.env.SMTP_PORT,

  smtp_user: process.env.SMTP_USER,

  smtp_pass: process.env.SMTP_PASS,

  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,

  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

  super_admin_id: process.env.SUPER_ADMIN_ID,

  super_admin_email: process.env.SUPER_ADMIN_EMAIL,

  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
};
