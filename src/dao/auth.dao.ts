import { db } from '../utils/db';
import {
  createUserQuery,
  findUserByEmailQuery,
} from '../db/queries/auth.sql';

export const createUser = async (name: string, email: string, hashedPassword: string, mobile: string) => {
  const result = await db.query(createUserQuery, [name, email, mobile, hashedPassword]);
  return result.rows[0]; // returns id, email, mobile, created_at
}

export const findUserByEmail = async (email: string) => {
  const result = await db.query(findUserByEmailQuery, [email]);
  return result.rows[0]; // returns full user row (including hashed password)
}
