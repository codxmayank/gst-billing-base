import { getUserByIdQuery } from "../db/queries/user.sql";
import { db } from "../utils/db";

export const getUserById = async (userId: string) => {
  const user = await db.query(getUserByIdQuery, [userId]);
  return user.rows[0];
}
