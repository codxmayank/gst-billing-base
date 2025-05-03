import jwt from '@fastify/jwt';

export const signToken = (fastify: any, payload: object) => {
  return fastify.jwt.sign(payload);
};

export const verifyToken = async (fastify: any, token: string) => {
  return fastify.jwt.verify(token);
};
