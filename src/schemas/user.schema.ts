import { z } from 'zod';

export const GetUserReqSchema = z.object({
  userId: z.string().min(2)
});
  
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  mobile: z.string(),
  isVerified: z.boolean()
});

export type UserResponse = z.infer<typeof UserSchema>;
