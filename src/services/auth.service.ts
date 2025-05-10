// src/services/auth.service.ts
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../dao/auth.dao';
import { hashPassword, verifyPassword } from '../utils/hash';

export const signupService = async (name: string, email: string, password: string, mobile: string) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashed = await hashPassword(password);
  const user = await createUser(name, email, hashed, mobile);
  return user;
}

export const loginService = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  const JWT_SECRET = process.env.JWT_SECRET!;
  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );

  return {
    token,
    user: {
      id: user.id
    },
  };
}
