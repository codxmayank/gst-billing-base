import { z } from 'zod';

// Signup schema
export const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, 'Must include an uppercase letter')
    .regex(/[0-9]/, 'Must include a digit')
    .regex(/[^A-Za-z0-9]/, 'Must include a special character'),
  confirmPassword: z.string(),
  mobile: z.string().length(10, 'Mobile number must be 10 digits'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match',
});


// Login schema
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

// Types for use in controller/service
export type SignupInput = z.infer<typeof SignupSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
