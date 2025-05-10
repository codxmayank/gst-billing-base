import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';

const authPlugin = async (req: FastifyRequest, reply: FastifyReply) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    // throw new Error('Unauthorized');
    reply.status(401).send({ error: 'Unauthorized' });
  } else {
    try {
      const secret = process.env.JWT_SECRET!;
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
    } catch (err) {
      // throw new Error('Invalid token');
      reply.status(401).send({ error: 'Invalid token' });
    }
  }
};

export default authPlugin;

export const authenticate = (fn: (req: FastifyRequest, reply: FastifyReply) => any) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    await authPlugin(req, reply);
    return fn(req, reply);
  };
};
