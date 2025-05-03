// types/fastify.d.ts
import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      id: string;
      email: string;
    };
  }

  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}
