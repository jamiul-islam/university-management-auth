import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  env: process.env.NODE_ENV || 'development',
  defaultStudentPassword: process.env.DEFAULT_STUDENT_PASSWORD,
  default_student_pass: process.env.DEFAULT_STUDENT_PASSWORD,
  default_faculty_pass: process.env.DEFAULT_FACULTY_PASSWORD,
  default_admin_pass: process.env.DEFAULT_ADMIN_PASSWORD,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
