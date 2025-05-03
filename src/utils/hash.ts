import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 12; // balanced between security and speed

export const hashPassword = async (plain: string): Promise<string> =>
  await bcrypt.hash(plain, SALT_ROUNDS);

export const verifyPassword = async (plain: string, hash: string): Promise <boolean> =>
  await bcrypt.compare(plain, hash);
