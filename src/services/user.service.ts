import { getUserById } from "../dao/user.dao";
import { UserResponse } from "../schemas/user.schema";

export const getUserByIdImpl = async (userId: string): Promise<UserResponse> => {
  const user = await getUserById(userId);
  if (!user) throw new Error('User details not found');

  const {id, name, email, mobile, isVerified} = user || {};
  return {
    id,
    name,
    email,
    mobile,
    isVerified
  };
}
