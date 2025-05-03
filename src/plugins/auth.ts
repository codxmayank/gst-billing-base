// src/plugins/auth.ts
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

const authPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.decorate('authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return reply.status(401).send({ error: 'Missing or invalid token' });
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET) as { sub: string; email: string };

      // Attach user to request
      req.user = {
        id: decoded.sub,
        email: decoded.email,
      };
    } catch (err) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }
  });
};

export default authPlugin;
