// src/controllers/auth.controller.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import { SignupSchema, LoginSchema } from '../schemas/auth.schema';
import { signupService, loginService } from '../services/auth.service';

export const signupController = async (req: FastifyRequest, reply: FastifyReply) => {
  const parsed = SignupSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send({ error: parsed.error.flatten() });
  }

  const { name, email, password, mobile } = parsed.data;

  try {
    const user = await signupService(name, email, password, mobile);
    return reply.status(201).send({
      message: 'User created successfully',
      user: {
        id: user.id
      },
    });
  } catch (err: any) {
    return reply.status(400).send({ error: err.message });
  }
}

export const loginController = async (req: FastifyRequest, reply: FastifyReply) => {
  const parsed = LoginSchema.safeParse(req.body);
  if (!parsed.success) {
    return reply.status(400).send({ error: parsed.error.flatten() });
  }

  const { email, password } = parsed.data;

  try {
    const { token, user } = await loginService(email, password);
    return reply.status(200).send({
      message: 'Login successful',
      token,
      user,
    });
  } catch (err: any) {
    return reply.status(401).send({ error: err.message });
  }
}
