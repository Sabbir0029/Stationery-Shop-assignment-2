import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  path: process.env.PORT,
  database_url: process.env.MONGODB_URL,
  bcrypt_saltRounds: process.env.BCRYPT_SALT_ROUNDS,
};
