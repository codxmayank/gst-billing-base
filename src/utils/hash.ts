import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => bcrypt.hash(password, 10);

export const verifyPassword = async (hash: string, plain: string) => bcrypt.compare(plain, hash);
